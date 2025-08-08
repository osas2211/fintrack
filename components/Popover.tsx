import React, { useRef, useEffect, useState, ReactNode } from "react"
import { gsap } from "gsap"

interface PopoverProps {
  children: ReactNode
  anchor: ReactNode
  className?: string
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  anchor,
  className = "",
}) => {
  const popoverRef = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (popoverRef.current) {
      gsap.fromTo(
        popoverRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
      )
    }
  }, [show])

  // Close on outside click
  useEffect(() => {
    if (!show) return
    const handleClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [show])

  return (
    <th className="py-2 md:py-[8px] cursor-pointer hover:bg-[#49656E]/5 px-1 w-[10%] relative z-10">
      <div
        onClick={() => setShow(!show)}
        className="relative z-10 justify-start w-full"
      >
        {anchor}
      </div>
      {show && (
        <div
          ref={popoverRef}
          onClick={() => setShow(!show)}
          className={`absolute z-50 mt-2 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[180px] ${className}`}
        >
          {children}
        </div>
      )}
    </th>
  )
}

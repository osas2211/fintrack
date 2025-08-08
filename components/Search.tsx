import React, { useRef, useState, useEffect } from "react"
import { BiSearch } from "react-icons/bi"
import { gsap } from "gsap"
import { CiSearch } from "react-icons/ci"

interface SearchProps {
  onSearch?: (value: string) => void
  placeholder?: string
  className?: string
}

export const Search: React.FC<SearchProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const inputRef = useRef<HTMLInputElement>(null)
  const popoverRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open && popoverRef.current) {
      gsap.fromTo(
        popoverRef.current,
        { opacity: 0, scale: 0.95, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: "power2.out" }
      )
      inputRef.current?.focus()
    }
  }, [open])

  // Close on outside click
  useEffect(() => {
    if (!open) return
    const handleClick = (e: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(e.target as Node)
      ) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [open])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(value)
    setOpen(false)
  }

  return (
    <>
      <button onClick={() => setOpen(!open)} aria-label="Search">
        <CiSearch size={24} className="cursor-pointer" />
      </button>
      {open && (
        <div
          ref={popoverRef}
          className="absolute top-[4rem] right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 flex items-center gap-2 min-w-[220px] z-50"
        >
          <form className="flex w-full" onSubmit={handleSearch}>
            <input
              ref={inputRef}
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 border rounded-l-lg outline-none focus:border-[#4B8B9F] transition placeholder:text-sm"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-[#4B8B9F] text-white rounded-r-lg font-medium hover:bg-[#437D8E] transition"
            >
              Go
            </button>
          </form>
        </div>
      )}
    </>
  )
}

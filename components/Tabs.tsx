"use client"

import React, { ReactNode, useState } from "react"

type TabItem = {
  label: string
  component: ReactNode
}

type TabsProps = {
  items: TabItem[]
  default_active: string
  onTabChange?: (label: string) => void
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  default_active,
  onTabChange,
}) => {
  const [active, setActive] = useState(default_active)
  return (
    <div>
      <div className="flex gap-4 relative">
        {items.map((item) => (
          <button
            key={item.label}
            onClick={() => {
              setActive(item.label)
              onTabChange && onTabChange(item.label)
            }}
            className={`px-4 py-2 bg-transparent cursor-pointer border-b-2 ${
              active === item.label
                ? "border-[#4B8B9F] text-[#437D8E] font-semibold"
                : "border-transparent text-[#15272D]/60"
            }`}
          >
            {item.label}
          </button>
        ))}
        <div className="absolute bottom-0 left-0 h-[2px] w-full bg-[#15272D]/15" />
      </div>
      <div className="mt-7">
        {items.find((item) => item.label === active)?.component}
      </div>
    </div>
  )
}

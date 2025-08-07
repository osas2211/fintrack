"use client"
import Link from "next/link"
import React from "react"

const routes: { path: string; label: string }[] = [
  { path: "/", label: "Dashboard" },
  { path: "/", label: "Transactions" },
  { path: "/", label: "Report" },
  { path: "/", label: "Settings" },
]

export const Sidebar = () => {
  return (
    <aside className="md:w-[320px] sticky bg-[#FCFDFD] top-[7.5rem] left-0 h-[400px]">
      <ul>
        {routes.map(({ path, label }, index) => {
          return (
            <li key={index}>
              <Link
                href={path}
                className={`${
                  index === 0
                    ? "text-[#3A6C7B] bg-[#386776]/16"
                    : "hover:text-[#3A6C7B] hover:bg-[#386776]/5"
                } block px-[18px] py-2 rounded-full font-medium transition-all`}
              >
                <p>{label}</p>
              </Link>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

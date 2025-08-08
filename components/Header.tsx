"use client"
import React, { useState } from "react"
import { Logo } from "./Logo"
import { IoMdMenu } from "react-icons/io"
import { CiGrid41 } from "react-icons/ci"
import { Avatar } from "./Avatar"
import { Search } from "./Search"
import { useTransactionsQuery } from "@/context/TransactionsQueryContext"
import gsap from "gsap"

export const Header = () => {
  const { setParams } = useTransactionsQuery()
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  return (
    <div className="py-4 md:py-6 flex items-center justify-between sticky bg-[#FCFDFD] top-0 left-0 z-50">
      <div className="flex items-center gap-[26px]">
        <IoMdMenu
          size={24}
          className="cursor-pointer"
          onClick={() => {
            if (!sidebarIsOpen) {
              gsap.to(".sidebar", {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
              })
              setSidebarIsOpen(true)
            } else {
              gsap.to(".sidebar", {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              })
              setSidebarIsOpen(false)
            }
          }}
        />
        <div className="text-[#437D8E] flex items-center gap-2">
          <div className="">
            <Logo />
          </div>
          <h3 className="font-timmana font-medium text-[24px] leading-none pt-3">
            FinTrack
          </h3>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <Search
          placeholder="Search by Tx remarks..."
          onSearch={(value) =>
            setParams((prev) => ({ ...prev, search: value }))
          }
        />
        <CiGrid41 size={24} className="cursor-pointer" />
        <Avatar size={40} src="/profile.png" />
      </div>
    </div>
  )
}

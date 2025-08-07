"use client"
import React from "react"
import { Logo } from "./Logo"
import { IoMdMenu } from "react-icons/io"
import { CiSearch, CiGrid41 } from "react-icons/ci"
import { Avatar } from "./Avatar"

export const Header = () => {
  return (
    <div className="py-4 md:py-6 flex items-center justify-between sticky bg-[#FCFDFD] top-0 left-0 z-50">
      <div className="flex items-center gap-[26px]">
        <IoMdMenu size={24} className="cursor-pointer" />
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
        <CiSearch size={24} className="cursor-pointer" />
        <CiGrid41 size={24} className="cursor-pointer" />
        <Avatar size={40} src="/profile.png" />
      </div>
    </div>
  )
}

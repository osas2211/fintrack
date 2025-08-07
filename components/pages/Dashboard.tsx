"use client"
import React from "react"
import { BiCaretDown } from "react-icons/bi"
import { Status } from "../Status"
import { Button } from "../Button"
import { PiDotsThreeCircleThin } from "react-icons/pi"

export const Dashboard = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="inline-flex items-center gap-1 cursor-pointer">
            <h2 className="text-[34px] leading-10 font-bold">Wallet ledger</h2>
            <BiCaretDown />
          </div>
          <Status status="active" />
        </div>

        <div className="flex items-center gap-3">
          <Button className="text-white">Share</Button>
          <PiDotsThreeCircleThin size={36} className="cursor-pointer" />
        </div>
      </div>
    </div>
  )
}

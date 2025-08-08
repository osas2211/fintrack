"use client"
import React from "react"
import { BiCaretDown } from "react-icons/bi"
import { Status } from "../Status"
import { Button } from "../Button"
import { PiDotsThreeCircleThin } from "react-icons/pi"
import { Summary } from "../Summary"
import { Tabs } from "../Tabs"
import { TransactionTable } from "../TransactionsTable"

const dashboardTabs = [
  { label: "Overview", component: <Summary /> },
  { label: "Transactions", component: <TransactionTable /> },
]

export const Dashboard = () => {
  return (
    <div className="min-h-screen w-full space-y-7">
      <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-2">
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

      <div className="flex items-center gap-3 text-[#15272D]/62 py-2">
        <img src={"/users-group.png"} />
        <p>Ava, Liam, Noah +12 others</p>
      </div>

      <div>
        <Tabs default_active="Overview" items={dashboardTabs} />
      </div>
    </div>
  )
}

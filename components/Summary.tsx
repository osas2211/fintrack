"use client"
import React from "react"
import { BsThreeDots } from "react-icons/bs"
import { TransactionTable } from "./TransactionsTable"
import { DashboardSummary } from "@/types"

const summary_data: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10,
}

export const Summary = () => {
  const valueInCurrency = (value: number) => {
    return Intl.NumberFormat("en-US", {
      currency: "USD",
      style: "currency",
      trailingZeroDisplay: "stripIfInteger",
    }).format(value)
  }
  return (
    <div>
      <p className="text-xl font-semibold mt-3 mb-[18px]">Summary</p>
      <div className="grid grid-cols-4 gap-7">
        <SummaryCard
          title="Total Balance"
          value={valueInCurrency(summary_data.totalBalance)}
          percent={summary_data.balanceChange}
        />
        <SummaryCard
          title="Total Credits"
          value={valueInCurrency(summary_data.totalCredits)}
          percent={summary_data.creditsChange}
        />
        <SummaryCard
          title="Total Debits"
          value={valueInCurrency(summary_data.totalDebits)}
          percent={summary_data.debitsChange}
        />
        <SummaryCard
          title="Transactions"
          value={`${summary_data.transactionCount}`}
          percent={summary_data.transactionChange}
        />
      </div>
      <div className="my-7">
        <TransactionTable />
      </div>
    </div>
  )
}

export const SummaryCard = ({
  title,
  value,
  percent,
}: {
  title: string
  value: string
  percent: number
}) => {
  return (
    <div className="bg-[#34616F]/9 rounded-2xl md:p-7 p-4 space-y-[18px]">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm md:text-[17px] font-bold">{title}</p>
        <BsThreeDots />
      </div>
      <div>
        <h2 className="md:text-[34px] text-lg font-bold">{value}</h2>
        <p
          className={`${
            percent < 0 ? "text-red-500" : "text-primary"
          } text-[13px] font-medium`}
        >
          {percent}%
        </p>
      </div>
    </div>
  )
}

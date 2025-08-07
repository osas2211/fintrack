"use client"
import React from "react"
import { BsThreeDots } from "react-icons/bs"

const summary_data = [
  { title: "Total Balance", value: "$12,345", percent: "+5%" },
  { title: "Total Credits", value: "$7,890", percent: "+3%" },
  { title: "Total Debits", value: "$4,455", percent: "-2%" },
  { title: "Transactions", value: "150", percent: "+10%" },
]

export const Summary = () => {
  return (
    <div>
      <p className="text-xl font-semibold mt-3 mb-[18px]">Summary</p>
      <div className="grid grid-cols-4 gap-7">
        {summary_data.map((data, index) => {
          return <SummaryCard key={index} {...data} />
        })}
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
  percent: string
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
            percent.includes("-") ? "text-red-500" : "text-primary"
          } text-[13px] font-medium`}
        >
          {percent}
        </p>
      </div>
    </div>
  )
}

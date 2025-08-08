"use client"
import React from "react"

type statusT = "active" | "Credit" | "Debit"

export const Status = ({ status }: { status: statusT }) => {
  return (
    <div
      className={`bg-[#34616F]/9 px-2 py-1 rounded-full text-[15px] capitalize flex items-center gap-2`}
    >
      <div
        className="rounded-full"
        style={{
          width: 6,
          height: 6,
          background: status === "Debit" ? "#C6381B" : "#087A2E",
        }}
      />
      <p>{status}</p>
    </div>
  )
}

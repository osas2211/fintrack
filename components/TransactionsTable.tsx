import React from "react"
import { BiCaretDown } from "react-icons/bi"
import { Status } from "./Status"

export interface Transaction {
  id: string
  date: string
  remark: string
  amount: number
  currency: string
  type: "Credit" | "Debit"
}

interface TransactionTableProps {
  transactions: Transaction[]
}

export const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full !flex !flex-col">
        <thead className="w-full">
          <tr className=" text-[#15272D]/62 !font-normal text-[13px] flex items-center justify-between gap-[18px] w-full">
            <th className="py-2 md:py-[8px] inline-flex items-center gap-2  cursor-pointer w-[40%]">
              <p>Date</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[8px] inline-flex items-center gap-2  cursor-pointer w-[20%]">
              <p>Remark</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[8px] inline-flex items-center gap-2  cursor-pointer w-[10%]">
              <p>Amount</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[8px] inline-flex items-center gap-2  cursor-pointer w-[10%]">
              <p>Currency</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[8px] inline-flex items-center gap-2  cursor-pointer w-[10%]">
              <p>Type</p>
              <BiCaretDown />
            </th>
          </tr>
        </thead>
        <tbody className="">
          {transactions.map((tx) => (
            <tr
              key={tx.id}
              className="flex justify-between gap-[18px] text-[15px]"
            >
              <td className="py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 w-[40%]">
                {tx.date}
              </td>
              <td className="py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 w-[20%]">
                {tx.remark}
              </td>
              <td
                className={`py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 w-[10%] `}
              >
                {Intl.NumberFormat("en-US", {
                  currency: "USD",
                  style: "currency",
                  trailingZeroDisplay: "stripIfInteger",
                }).format(tx.amount)}
              </td>
              <td className="py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 w-[10%]">
                {tx.currency}
              </td>
              <td className="py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 w-[10%]">
                <Status status={tx.type} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

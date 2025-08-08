import React from "react"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import { Status } from "./Status"
import { useTransactions } from "@/hooks/useTransactions"
import { useTransactionsQuery } from "@/context/TransactionsQueryContext"
import { TableSkeletonLoader } from "@/components/TableSkeletonLoader"
import { Popover } from "./Popover"
import { EmptyState } from "./Empty"

export const TransactionTable = () => {
  const { params, setParams } = useTransactionsQuery()
  const { data, isLoading, isError } = useTransactions(params)

  const toggleSort = (key: "date" | "amount") => {
    setParams((p) => {
      const sameKey = p.sort === key
      const nextOrder = sameKey && p.order === "asc" ? "desc" : "asc"
      return { ...p, sort: key, order: nextOrder }
    })
  }

  if (isLoading) return <TableSkeletonLoader />
  if (data?.length === 0) return <EmptyState message="No transactions found." />
  if (isError)
    return <div className="p-4 text-red-600">Failed to load transactions.</div>
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full !flex !flex-col">
        <thead className="w-full">
          <tr className=" text-[#15272D]/62 !font-normal text-[13px] flex items-center justify-between gap-[18px] w-full">
            <ThButton
              label="Date"
              active={params.order === "desc"}
              order={params.order!}
              onClick={() => toggleSort("date")}
              width="md:w-[40%] w-[40%]"
            />
            <th className="py-2 md:py-[8px] inline-flex items-center gap-2  cursor-pointer hover:bg-[#49656E]/5 px-1 md:w-[20%] w-[40%]">
              <p>Remark</p>
              {/* <BiCaretDown /> */}
            </th>
            <ThButton
              label="Amount"
              active={params.sort === "amount"}
              order={params.order!}
              onClick={() => toggleSort("amount")}
              width="md:w-[10%] w-[20%]"
            />
            <th className="py-2 md:py-[8px] md:inline-flex hidden items-center gap-2  cursor-pointer hover:bg-[#49656E]/5 px-1 md:w-[10%] w-[20%] ">
              <p>Currency</p>
              {/* <BiCaretDown /> */}
            </th>
            <Popover
              anchor={
                <div className="inline-flex items-center gap-2">
                  <p>Type</p>
                  <BiCaretDown />
                </div>
              }
            >
              <div>
                <button
                  className={`${
                    params.type === "Credit" ? "bg-gray-100" : ""
                  } w-full hover:bg-gray-100 p-1 text-start mb-2`}
                  onClick={() =>
                    setParams((prev) => ({
                      ...prev,
                      type: params.type === "Credit" ? "All" : "Credit",
                    }))
                  }
                >
                  Credit
                </button>
                <button
                  className={`${
                    params.type === "Debit" ? "bg-gray-100" : ""
                  } w-full hover:bg-gray-100 p-1 text-start`}
                  onClick={() =>
                    setParams((prev) => ({
                      ...prev,
                      type: params.type === "Debit" ? "All" : "Debit",
                    }))
                  }
                >
                  Debit
                </button>
              </div>
            </Popover>
          </tr>
        </thead>
        <tbody className="">
          {data?.map((tx) => (
            <tr
              key={tx.id}
              className="flex justify-between gap-[18px] md:text-[15px] text-sm"
            >
              <td className="py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 md:w-[40%] w-[40%]">
                {tx.date}
              </td>
              <td className="py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 md:w-[20%] w-[40%]">
                {tx.remark}
              </td>
              <td
                className={`py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 md:w-[10%] w-[20%] `}
              >
                {Intl.NumberFormat("en-US", {
                  currency: "USD",
                  style: "currency",
                  trailingZeroDisplay: "stripIfInteger",
                }).format(tx.amount)}
              </td>
              <td className="py-2 md:py-[18px] md:block hidden border-t-[1px] border-[#49656E]/20 md:w-[10%] w-[20%]">
                {tx.currency}
              </td>
              <td className="py-2 md:py-[18px] border-t-[1px] border-[#49656E]/20 md:w-[10%] w-[20%]">
                <Status status={tx.type} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const ThButton = ({
  label,
  active,
  order,
  onClick,
  width,
}: {
  label: string
  active: boolean
  order: "asc" | "desc"
  onClick: () => void
  width: string
}) => {
  return (
    <th className={`${width}`}>
      <button
        onClick={onClick}
        className={`py-2 md:py-[8px] inline-flex items-center gap-2  cursor-pointer hover:bg-[#49656E]/5 px-1 w-full ${
          active ? "bg-[#49656E]/5" : ""
        }`}
      >
        <span>{label}</span>
        {
          <span className="">
            {order === "desc" ? <BiCaretUp /> : <BiCaretDown />}
          </span>
        }
      </button>
    </th>
  )
}

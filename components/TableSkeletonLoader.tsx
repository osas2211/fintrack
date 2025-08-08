"use client"

import { BiCaretDown } from "react-icons/bi"

export const TableSkeletonLoader = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full !flex !flex-col border-collapse">
        <thead className="w-full">
          <tr className=" text-[#15272D]/62 !font-normal text-[13px] flex items-center justify-between gap-[18px] w-full">
            <th className="py-2 md:py-[18px] inline-flex items-center gap-2 border-b-[1px] border-[#49656E]/20 cursor-pointer w-[40%]">
              <p>Date</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[18px] inline-flex items-center gap-2 border-b-[1px] border-[#49656E]/20 cursor-pointer w-[20%]">
              <p>Remark</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[18px] inline-flex items-center gap-2 border-b-[1px] border-[#49656E]/20 cursor-pointer w-[10%]">
              <p>Amount</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[18px] inline-flex items-center gap-2 border-b-[1px] border-[#49656E]/20 cursor-pointer w-[10%]">
              <p>Currency</p>
              <BiCaretDown />
            </th>
            <th className="py-2 md:py-[18px] inline-flex items-center gap-2 border-b-[1px] border-[#49656E]/20 cursor-pointer w-[10%]">
              <p>Type</p>
              <BiCaretDown />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 8 }).map((_, i) => (
            <tr
              key={i}
              className="flex items-center justify-between gap-[18px] text-[15px] py-3"
            >
              <td className="h-8 w-[40%] animate-pulse rounded bg-gray-200"></td>

              <td className="h-8 w-[20%] animate-pulse rounded bg-gray-200"></td>

              <td className="h-8 w-[10%] animate-pulse rounded bg-gray-200"></td>

              <td className="h-8 w-[10%] animate-pulse rounded bg-gray-200"></td>

              <td className="h-8 w-[10%] animate-pulse rounded bg-gray-200"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

import { NextResponse } from "next/server"
import { transactions } from "@/data/transactions"

type SortKey = "date" | "amount"
type Order = "asc" | "desc"
type TxType = "Credit" | "Debit"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const sort = (searchParams.get("sort") as SortKey) || "date"
  const order = (searchParams.get("order") as Order) || "desc"
  const type = searchParams.get("type") as TxType | null
  const search = searchParams.get("search")?.toLowerCase() || ""

  let rows = [...transactions]

  // Search filter
  if (search) {
    rows = rows.filter(
      (row) =>
        row.remark.toLowerCase().includes(search) ||
        row.currency.toLowerCase().includes(search) ||
        row.type.toLowerCase().includes(search)
    )
  }

  // Filter by type
  if (type === "Credit" || type === "Debit") {
    rows = rows.filter((r) => r.type === type)
  }

  // Sort
  rows.sort((a, b) => {
    let compare = 0
    if (sort === "amount") {
      compare = a.amount - b.amount
    } else if (sort === "date") {
      compare = new Date(a.date).getTime() - new Date(b.date).getTime()
    }
    return order === "asc" ? compare : -compare
  })

  return NextResponse.json(rows)
}

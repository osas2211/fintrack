import { useQuery } from "@tanstack/react-query"
import type { Transaction, TxQuery } from "@/types"

function toQueryString(query: TxQuery) {
  const searchParams = new URLSearchParams()
  if (query.sort) searchParams.set("sort", query.sort)
  if (query.order) searchParams.set("order", query.order)
  if (query.type && query.type !== "All") searchParams.set("type", query.type)
  if (query.search && query.search.trim())
    searchParams.set("search", query.search.trim())
  const qs = searchParams.toString()
  return qs ? `?${qs}` : ""
}

async function fetchTransactions(params: TxQuery): Promise<Transaction[]> {
  const res = await fetch(`/api/transactions${toQueryString(params)}`, {
    cache: "no-store",
  })
  if (!res.ok) throw new Error("Failed to fetch transactions")
  return res.json()
}

export function useTransactions(params: TxQuery) {
  return useQuery({
    queryKey: ["transactions", params],
    queryFn: () => fetchTransactions(params),
  })
}

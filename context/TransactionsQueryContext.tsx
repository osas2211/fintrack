"use client"

import { TxQuery } from "@/types"
import { createContext, useContext, useState, ReactNode } from "react"

type TransactionsQueryContextType = {
  params: TxQuery
  setParams: (updater: (prev: TxQuery) => TxQuery) => void
}

const TransactionsQueryContext = createContext<
  TransactionsQueryContextType | undefined
>(undefined)

export function TransactionsQueryProvider({
  children,
}: {
  children: ReactNode
}) {
  const [params, setParamsState] = useState<TxQuery>({
    sort: "date",
    order: "asc",
    type: "All",
    search: "",
  })

  const setParams = (updater: (prev: TxQuery) => TxQuery) => {
    setParamsState((prev) => updater(prev))
  }

  return (
    <TransactionsQueryContext.Provider value={{ params, setParams }}>
      {children}
    </TransactionsQueryContext.Provider>
  )
}

export function useTransactionsQuery() {
  const ctx = useContext(TransactionsQueryContext)
  if (!ctx) {
    throw new Error(
      "useTransactionsQuery must be used inside TransactionsQueryProvider"
    )
  }
  return ctx
}

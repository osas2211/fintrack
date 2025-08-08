export interface Transaction {
  id: string
  date: string
  remark: string
  amount: number
  currency: string
  type: "Credit" | "Debit"
}

export interface DashboardSummary {
  totalBalance: number
  totalCredits: number
  totalDebits: number
  transactionCount: number
  balanceChange: number
  creditsChange: number
  debitsChange: number
  transactionChange: number
}

export type TxQuery = {
  sort?: "date" | "amount"
  order?: "asc" | "desc"
  type?: "Credit" | "Debit" | "All"
  search?: string
}

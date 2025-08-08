"use client"
import { Header } from "@/components/Header"
import { Dashboard } from "@/components/pages/Dashboard"
import { Sidebar } from "@/components/Sidebar"
import { TransactionsQueryProvider } from "@/context/TransactionsQueryContext"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <TransactionsQueryProvider>
        <main className="bg-[#FCFDFD] w-screen min-h-screen text-[#1B2528] font-sans ">
          <div className="max-w-[1440px] mx-auto xl:px-12 md:px-7 px-4 pb-12 ">
            <Header />
            <div className="md:flex gap-12 py-7 relative">
              <Sidebar />
              <Dashboard />
            </div>
          </div>
        </main>
      </TransactionsQueryProvider>
    </QueryClientProvider>
  )
}

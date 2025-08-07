import { Header } from "@/components/Header"
import { Sidebar } from "@/components/Sidebar"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-[#FCFDFD] w-screen min-h-screen text-[#1B2528] font-sans">
      <div className="max-w-[1440px] mx-auto xl:px-12 md:px-7 px-4 pb-12">
        <Header />
        <div className="flex gap-12 py-7">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

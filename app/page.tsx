import { Header } from "@/components/Header"
import Image from "next/image"

export default function Home() {
  return (
    <main className="bg-[#FCFDFD] w-screen min-h-screen text-[#1B2528]">
      <div className="max-w-[1440px] mx-auto xl:px-12 md:px-7 px-4 pb-12">
        <Header />
      </div>
    </main>
  )
}

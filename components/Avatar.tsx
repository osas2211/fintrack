"use client"
import Image from "next/image"
import React from "react"

export const Avatar = ({ src = "", size = 24, fallback = "FT" }) => {
  return (
    <>
      {src ? (
        <Image
          className="rounded-full"
          alt=""
          src={src}
          height={size}
          width={size}
        />
      ) : (
        <div
          className="bg-[#34616F]/10 rounded-full flex items-center justify-center font-semibold text-sm"
          style={{ width: size, height: size }}
        >
          {fallback}
        </div>
      )}
    </>
  )
}

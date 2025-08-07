import React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ className = "", ...props }) => (
  <button
    className={`bg-[#4B8B9F] text-[#020303] px-[18px] py-2 rounded-full cursor-pointer ${className}`}
    {...props}
  >
    {props.children}
  </button>
)

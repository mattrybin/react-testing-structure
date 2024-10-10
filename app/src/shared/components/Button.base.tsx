import React from "react"
import { cn } from "../utils/styling"

interface ButtonProps {
  onClick: () => void
  disabled?: boolean
  className: string
  children: React.ReactNode
  testId?: string
}

export const Button = ({ onClick, disabled, className, children, testId }: ButtonProps) => (
  <button
    data-testid={testId}
    className={cn(`${className} text-white px-4 py-2 rounded-md transition-opacity duration-200`, {
      "opacity-50 cursor-not-allowed": disabled,
      "hover:opacity-80": !disabled
    })}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

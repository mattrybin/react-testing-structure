import { Dispatch, SetStateAction, useState } from "react"
import { cn } from "../utils/styling"

interface InputPasswordProps {
  label: string
  id: string
  name: string
  value: string
  placeholder?: string
  onChange: Dispatch<SetStateAction<string>>
}

export const InputPassword = ({
  label,
  id,
  name,
  value,
  placeholder,
  onChange
}: InputPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="relative">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type={showPassword ? "text" : "password"}
        data-testid={id}
        id={id}
        name={name}
        placeholder={placeholder}
        className={cn(
          "w-full border border-gray-300 rounded-md p-2",
          "focus:ring-blue-500 focus:border-blue-500"
        )}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        data-testid={`${id}-show-password`}
        className="absolute right-2 top-[35px] text-sm text-gray-500"
        type="button"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  )
}

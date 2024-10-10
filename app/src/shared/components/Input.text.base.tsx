import { Dispatch, SetStateAction } from "react"
import { cn } from "../utils/styling"

interface InputProps {
  label: string
  id: string
  name: string
  value: string
  placeholder?: string
  onChange: Dispatch<SetStateAction<string>>
}

export const InputText = ({ label, id, name, value, placeholder, onChange }: InputProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <input
        type="text"
        data-testid={id}
        id={id}
        name={name}
        placeholder={placeholder}
        className={cn("w-full border border-gray-300 rounded-md p-2")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

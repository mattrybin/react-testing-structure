import { Dispatch, SetStateAction } from "react"
import { cn } from "../utils/styling"

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  label: string
  id: string
  value: string
  options: SelectOption[]
  placeholder?: string
  onChange: Dispatch<SetStateAction<string>>
}

export const Select = ({ label, id, value, options, placeholder, onChange }: SelectProps) => {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <select
        id={id}
        name={id}
        data-testid={id}
        className={cn("w-full border border-gray-300 rounded-md p-2")}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {placeholder && (
          <option
            value=""
            disabled
          >
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

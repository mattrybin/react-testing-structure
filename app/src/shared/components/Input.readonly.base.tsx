import { cn } from "../utils/styling"

interface InputTextProps {
  label: string
  id: string
  name: string
  value: string
}
export const InputReadonly = ({ label, id, name, value }: InputTextProps) => (
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
      className={cn(
        "w-full border border-gray-300 rounded-md p-2",
        "bg-gray-100 cursor-not-allowed"
      )}
      value={value}
      readOnly
    />
  </div>
)

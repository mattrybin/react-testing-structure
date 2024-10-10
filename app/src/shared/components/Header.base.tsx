import { PropsWithChildren } from "react"

export const Header = ({ children }: PropsWithChildren) => (
  <header className="flex items-center gap-3 p-4 border-b border-gray-200">{children}</header>
)

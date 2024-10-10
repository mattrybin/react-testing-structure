import { PropsWithChildren } from "react"

export const AppContainer = ({ children }: PropsWithChildren) => {
  return <div className="h-screen grid grid-rows-[auto_1fr]">{children}</div>
}

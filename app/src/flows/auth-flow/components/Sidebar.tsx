import { Step } from "./Step"
import { SidebarType } from "../AuthFlow.types"
import { processSidebar } from "../utils/processSidebar"

export const Sidebar = ({ data }: { data: SidebarType }) => {
  const steps = processSidebar(data)
  const lastStep = steps.length - 1
  return (
    <aside className="p-6 border-r border-gray-200 w-96">
      {steps.map((step, index) => (
        <Step
          key={step.id}
          id={step.id}
          title={step.title}
          active={step.active}
          completed={step.completed}
          lastStep={index === lastStep}
        />
      ))}
    </aside>
  )
}

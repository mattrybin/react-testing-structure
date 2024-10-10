import { z } from "zod"
import { cn } from "../../../shared/utils/styling"
import { softAssert } from "../../../shared/utils/asserts"
import { memo } from "react"
import { sidebarStepSchema } from "../AuthFlow.types"

export const StepPropsSchema = sidebarStepSchema.extend({
  completed: z.boolean(),
  lastStep: z.boolean()
})

export const Step = memo((props: z.infer<typeof StepPropsSchema>) => {
  softAssert(() => StepPropsSchema.parse(props))
  const { id, title, active, completed, lastStep } = props

  return (
    <div
      data-testid={`sidebar-step_${id}`}
      data-active={active}
      data-completed={completed}
      className={cn(`py-2 border-r border-gray-200 w-96 flex items-center gap-4 text-gray-500`)}
    >
      <StepIcon
        completed={completed}
        active={active}
        value={id}
        lastStep={lastStep}
      />
      <div className={cn({ "text-blue-500": active || completed })}>{title}</div>
    </div>
  )
})

const StepIcon = ({
  completed,
  active,
  value,
  lastStep
}: {
  completed: boolean
  active: boolean
  value: number
  lastStep: boolean
}) => {
  return (
    <div
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 relative bg-white",
        {
          "bg-blue-500 text-white border-blue-500": active,
          "border-blue-500 text-blue-500": completed
        }
      )}
    >
      {completed ? <span>&#10003;</span> : <span>{value}</span>}
      {!lastStep && <div className="absolute w-[1px] h-[20px] bg-gray-300 -bottom-[20px]"></div>}
    </div>
  )
}

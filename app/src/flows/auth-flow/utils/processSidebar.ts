import { z } from "zod"
import { sidebarStepSchema, SidebarType } from "../AuthFlow.types"

const outputSchema = sidebarStepSchema.extend({
  completed: z.boolean()
})

export const processSidebar = (data: SidebarType): z.infer<typeof outputSchema>[] => {
  const steps = Object.values(data)
  const activeIndex = steps.findIndex((step) => step.active)

  return steps.map((step, index) => ({
    ...step,
    completed: index < activeIndex
  }))
}

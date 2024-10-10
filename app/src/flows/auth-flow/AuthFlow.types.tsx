import { z } from "zod"

export const sidebarStepSchema = z.object({
  id: z.number(),
  title: z.string(),
  active: z.boolean()
})

export const sidebarSchema = z.record(sidebarStepSchema)
export type SidebarStepType = z.infer<typeof sidebarStepSchema>
export type SidebarType = z.infer<typeof sidebarSchema>

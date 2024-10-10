import { SidebarType } from "../AuthFlow.types"

export type SidebarAction = { type: "NEXT" } | { type: "PREVIOUS" } | { type: "RESET" }

export const initialSidebarStep: SidebarType = {
  1: {
    id: 1,
    title: "Add login details",
    active: true
  },
  2: {
    id: 2,
    title: "Select the user group",
    active: false
  },
  3: {
    id: 3,
    title: "Submit the form",
    active: false
  }
}

export const sidebarReducer = (state: SidebarType, action: SidebarAction): SidebarType => {
  const steps = Object.keys(state).map(Number)
  const current = steps.findIndex((step) => state[step].active)
  const NotFirstStep = current > 0
  const NotLastStep = current < steps.length - 1

  switch (action.type) {
    case "NEXT":
      if (NotLastStep) {
        const nextIndex = steps[current + 1]
        return {
          ...state,
          [steps[current]]: { ...state[steps[current]], active: false },
          [nextIndex]: { ...state[nextIndex], active: true }
        }
      }
      return state
    case "PREVIOUS":
      if (NotFirstStep) {
        const previousIndex = steps[current - 1]
        return {
          ...state,
          [steps[current]]: { ...state[steps[current]], active: false },
          [previousIndex]: { ...state[previousIndex], active: true }
        }
      }
      return state
    case "RESET":
      return initialSidebarStep
    default:
      throw new Error("Invalid type")
  }
}

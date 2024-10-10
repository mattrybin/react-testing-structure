import { describe, it, expect } from "vitest"
import { sidebarReducer, initialSidebarStep } from "./Sidebar.reducer"
import { SidebarType } from "../AuthFlow.types"

describe("sidebarReducer", () => {
  const createInitialState = (activeStep: 1 | 2): SidebarType => ({
    1: { ...initialSidebarStep[1], active: activeStep === 1 },
    2: { ...initialSidebarStep[2], active: activeStep === 2 }
  })

  it("should reset the sidebar when RESET action is called", () => {
    const newState = sidebarReducer(createInitialState(2), { type: "RESET" })
    expect(newState).toEqual(initialSidebarStep)
  })

  it("should move active step to the next step when NEXT action is called", () => {
    const newState = sidebarReducer(createInitialState(1), { type: "NEXT" })
    expect(newState[1].active).toBe(false)
    expect(newState[2].active).toBe(true)
  })

  it("should move active step to the previous step when PREVIOUS action is called", () => {
    const newState = sidebarReducer(createInitialState(2), { type: "PREVIOUS" })
    expect(newState[1].active).toBe(true)
    expect(newState[2].active).toBe(false)
  })

  it("should not move to the previous step when on the first step", () => {
    const initialState = createInitialState(1)
    const newState = sidebarReducer(initialState, { type: "PREVIOUS" })
    expect(newState).toEqual(initialState)
  })

  it("should not move to the next step when on the last step", () => {
    const initialState = createInitialState(2)
    const newState = sidebarReducer(initialState, { type: "NEXT" })
    expect(newState).toEqual(initialState)
  })
})

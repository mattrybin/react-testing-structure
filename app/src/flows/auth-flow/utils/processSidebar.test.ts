import { describe, it, expect } from "vitest"
import { processSidebar } from "./processSidebar"

describe("processSidebar", () => {
  it("should return an array of steps with correct completion status", () => {
    const data = {
      "step-1": {
        active: false,
        id: "step-1",
        title: "Step 1"
      },
      "step-2": {
        active: true,
        id: "step-2",
        title: "Step 2"
      },
      "step-3": {
        active: false,
        id: "step-3",
        title: "Step 3"
      }
    }
    const steps = processSidebar(data)
    expect(steps).toHaveLength(3)
    expect(steps[0]).toHaveProperty("active", false)
    expect(steps[0]).toHaveProperty("completed", true)
    expect(steps[1]).toHaveProperty("active", true)
    expect(steps[1]).toHaveProperty("completed", false)
    expect(steps[2]).toHaveProperty("active", false)
    expect(steps[2]).toHaveProperty("completed", false)
  })
})

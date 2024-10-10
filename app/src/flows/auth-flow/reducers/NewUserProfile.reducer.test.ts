import { describe, it, expect } from "vitest"
import { newUserProfileReducer, initialProfile } from "./NewUserProfile.reducer"

describe("newUserProfileReducer", () => {
  it("should update the profile when UPDATE action is dispatched", () => {
    const newState = newUserProfileReducer(initialProfile, {
      type: "UPDATE",
      field: "email",
      value: "matt"
    })
    expect(newState.email).toEqual("matt")
  })

  it("should reset the profile when RESET action is dispatched", () => {
    const newState = newUserProfileReducer({ ...initialProfile, email: "matt" }, { type: "RESET" })
    expect(newState).toEqual(initialProfile)
  })

  it("should throw an error for invalid action type", () => {
    expect(() => newUserProfileReducer(initialProfile, { type: "INVALID_ACTION" } as any)).toThrow(
      "Invalid type"
    )
  })
})

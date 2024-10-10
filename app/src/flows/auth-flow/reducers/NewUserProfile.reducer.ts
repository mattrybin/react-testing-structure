export interface NewUserProfile {
  email: string
  password: string
  userGroup: string
}

export type NewUserProfileAction =
  | { type: "UPDATE"; field: keyof NewUserProfile; value: string }
  | { type: "RESET" }

export const initialProfile: NewUserProfile = {
  email: "",
  password: "",
  userGroup: ""
}

export const newUserProfileReducer = (
  state: NewUserProfile,
  action: NewUserProfileAction
): NewUserProfile => {
  switch (action.type) {
    case "UPDATE":
      return { ...state, [action.field]: action.value }
    case "RESET":
      return initialProfile
    default:
      throw new Error("Invalid type")
  }
}

import {
  createContext,
  useContext,
  useReducer,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction
} from "react"
import {
  NewUserProfile,
  initialProfile,
  newUserProfileReducer
} from "./reducers/NewUserProfile.reducer"
import { initialSidebarStep, sidebarReducer } from "./reducers/Sidebar.reducer"
import { SidebarStepType, SidebarType } from "./AuthFlow.types"

export interface AuthFlowContextType {
  profile: NewUserProfile
  updateProfile: (field: keyof NewUserProfile, value: string) => void
  sidebar: SidebarType
  sidebarNext: () => void
  sidebarPrevious: () => void
  currentStep: SidebarStepType | undefined
  resetAuthFlow: () => void
  enableNext: boolean
  setEnableNext: Dispatch<SetStateAction<boolean>>
  isIntialState: boolean
}

const AuthFlowContext = createContext<AuthFlowContextType | undefined>(undefined)

export const useAuthFlow = () => {
  const context = useContext(AuthFlowContext)
  if (!context) {
    throw new Error("useAuthFlow must be used within a AuthFlowProvider")
  }
  return context
}

export const AuthFlowProvider = ({ children }: PropsWithChildren) => {
  const [enableNext, setEnableNext] = useState(false)
  const [profile, dispatch] = useReducer(newUserProfileReducer, initialProfile)
  const [sidebar, dispatchSidebar] = useReducer(sidebarReducer, initialSidebarStep)

  const updateProfile = (field: keyof NewUserProfile, value: string) => {
    dispatch({ type: "UPDATE", field, value })
  }

  const sidebarNext = () => {
    dispatchSidebar({ type: "NEXT" })
  }

  const sidebarPrevious = () => {
    dispatchSidebar({ type: "PREVIOUS" })
  }

  const resetAuthFlow = () => {
    dispatch({ type: "RESET" })
    dispatchSidebar({ type: "RESET" })
    setEnableNext(false)
  }

  const currentStep = Object.values(sidebar).find((step) => step.active)

  const isIntialState = profile === initialProfile

  const value: AuthFlowContextType = {
    profile,
    updateProfile,
    sidebar,
    sidebarNext,
    sidebarPrevious,
    currentStep,
    enableNext,
    setEnableNext,
    resetAuthFlow,
    isIntialState
  }

  return <AuthFlowContext.Provider value={value}>{children}</AuthFlowContext.Provider>
}

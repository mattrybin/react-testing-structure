import { AuthFlowProvider } from "./AuthFlow.context"
import { AddUserRoute } from "./routes/AddUser.route"

export const AuthFlow = () => (
  <AuthFlowProvider>
    <AddUserRoute />
  </AuthFlowProvider>
)

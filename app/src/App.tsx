import "./App.css"
import { AuthFlow } from "./flows/auth-flow/AuthFlow.root"
import { AppContainer } from "./shared/components/containers.base"
import { Header } from "./shared/components/Header.base"

function App() {
  // This is just a placeholder, I would handle routing using something like react-router
  const Routes = () => {
    switch (true) {
      case true:
        return <AuthFlow />
      default:
        return null
    }
  }
  return (
    <AppContainer>
      <Header>
        <img
          className="w-5 h-5"
          src={"/logo.png"}
          alt="logo"
        />
        <div>Add New User Profile</div>
      </Header>
      {Routes()}
    </AppContainer>
  )
}

export default App

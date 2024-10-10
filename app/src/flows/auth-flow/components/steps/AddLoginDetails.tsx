import { useEffect, useState } from "react"
import { AuthFlowContextType } from "../../AuthFlow.context"
import { NewUserProfile } from "../../reducers/NewUserProfile.reducer"
import { InputText } from "../../../../shared/components/Input.text.base"
import { InputPassword } from "../../../../shared/components/Input.password.base"

export const AddLoginDetails = ({
  email,
  password,
  setEnableNext,
  updateProfile
}: {
  email: NewUserProfile["email"]
  password: NewUserProfile["password"]
  setEnableNext: AuthFlowContextType["setEnableNext"]
  updateProfile: AuthFlowContextType["updateProfile"]
}) => {
  const [emailValue, setEmailValue] = useState(() => email)
  const [passwordValue, setPasswordValue] = useState(() => password)
  const [passwordValueVerify, setPasswordValueVerify] = useState(() => password)

  useEffect(() => {
    if (passwordValue !== passwordValueVerify) {
      setEnableNext(false)
    } else {
      if (emailValue && passwordValue) {
        updateProfile("email", emailValue)
        updateProfile("password", passwordValue)
        setEnableNext(true)
      }
    }
  }, [passwordValue, passwordValueVerify, emailValue])

  return (
    <div className="space-y-4">
      <form className="space-y-4">
        <InputText
          label="Email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={emailValue}
          onChange={setEmailValue}
        />
        <InputPassword
          label="Password"
          id="password"
          name="password"
          placeholder="Enter your password"
          value={passwordValue}
          onChange={setPasswordValue}
        />
        <InputPassword
          label="Password Verify"
          id="password-verify"
          name="password-verify"
          placeholder="Enter your password again"
          value={passwordValueVerify}
          onChange={setPasswordValueVerify}
        />
      </form>
    </div>
  )
}

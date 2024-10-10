import { InputReadonly } from "../../../../shared/components/Input.readonly.base"

export const SubmitForm = ({ email, userGroup }: { email: string; userGroup: string }) => {
  return (
    <div className="space-y-4">
      <form className="space-y-4">
        <InputReadonly
          label="Email"
          id="email"
          name="email"
          value={email}
        />
        <InputReadonly
          label="User Group"
          id="user-group"
          name="user-group"
          value={userGroup}
        />
      </form>
    </div>
  )
}

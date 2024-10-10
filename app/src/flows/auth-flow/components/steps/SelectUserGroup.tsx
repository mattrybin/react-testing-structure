import { useEffect, useState } from "react"
import { AuthFlowContextType } from "../../AuthFlow.context"
import { NewUserProfile } from "../../reducers/NewUserProfile.reducer"
import { Select } from "../../../../shared/components/Input.select.base"

interface SelectUserGroupProps {
  userGroup: NewUserProfile["userGroup"]
  setEnableNext: AuthFlowContextType["setEnableNext"]
  updateProfile: AuthFlowContextType["updateProfile"]
}

export const SelectUserGroup = ({
  userGroup,
  setEnableNext,
  updateProfile
}: SelectUserGroupProps) => {
  const [selectedGroup, setSelectedGroup] = useState<NewUserProfile["userGroup"]>(userGroup)

  const userGroupOptions = [
    {
      value: "1",
      label: "Group A"
    },
    {
      value: "2",
      label: "Group B"
    },
    {
      value: "3",
      label: "Group C"
    }
  ]

  useEffect(() => {
    if (selectedGroup) {
      updateProfile("userGroup", selectedGroup)
      setEnableNext(true)
    } else {
      setEnableNext(false)
    }
  }, [selectedGroup])

  return (
    <div className="space-y-4">
      <form className="space-y-4">
        <Select
          label="User Group"
          id="user-group"
          value={selectedGroup}
          options={userGroupOptions}
          placeholder="Select a user group"
          onChange={setSelectedGroup}
        />
      </form>
    </div>
  )
}

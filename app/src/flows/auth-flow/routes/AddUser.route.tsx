import { Sidebar } from "../components/Sidebar"
import { AddLoginDetails } from "../components/steps/AddLoginDetails"
import { SelectUserGroup } from "../components/steps/SelectUserGroup"
import { SubmitForm } from "../components/steps/SubmitForm"
import { useAuthFlow } from "../AuthFlow.context"
import { Footer } from "../components/Footer"

export const AddUserRoute = () => {
  const { sidebar, currentStep, profile, updateProfile, setEnableNext, isIntialState } =
    useAuthFlow()

  return (
    <section className="grid grid-cols-[auto_1fr]">
      <Sidebar data={sidebar} />
      <main className="p-4 bg-slate-100 w-full grid grid-rows-[1fr]">
        <div className="bg-white rounded-lg grid grid-rows-[auto_76px]">
          <div
            className="p-6"
            key={JSON.stringify(isIntialState)}
          >
            {currentStep?.id === 1 ? (
              <AddLoginDetails
                email={profile.email}
                password={profile.password}
                setEnableNext={setEnableNext}
                updateProfile={updateProfile}
              />
            ) : null}
            {currentStep?.id === 2 ? (
              <SelectUserGroup
                userGroup={profile.userGroup}
                setEnableNext={setEnableNext}
                updateProfile={updateProfile}
              />
            ) : null}
            {currentStep?.id === 3 ? (
              <SubmitForm
                email={profile.email}
                userGroup={profile.userGroup}
              />
            ) : null}
          </div>
          <Footer />
        </div>
      </main>
    </section>
  )
}

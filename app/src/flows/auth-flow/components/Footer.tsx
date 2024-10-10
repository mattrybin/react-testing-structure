import { Button } from "../../../shared/components/Button.base"
import { useAuthFlow } from "../AuthFlow.context"

export const Footer = () => {
  const { sidebarPrevious, sidebarNext, currentStep, resetAuthFlow, enableNext, isIntialState } =
    useAuthFlow()
  return (
    <footer className="flex items-center justify-between p-6 border-t border-gray-200">
      <section>
        <Button
          className="bg-gray-500"
          onClick={sidebarPrevious}
          disabled={currentStep?.id === 1}
          testId="previous-button"
        >
          Previous
        </Button>
      </section>
      <section className="flex gap-4">
        <Button
          className="bg-red-500"
          onClick={resetAuthFlow}
          disabled={isIntialState}
          testId="reset-button"
        >
          Cancel
        </Button>
        {currentStep?.id !== 3 ? (
          <Button
            className="bg-blue-500"
            onClick={sidebarNext}
            disabled={!enableNext}
            testId="next-button"
          >
            Next
          </Button>
        ) : (
          <Button
            className="bg-green-500"
            onClick={() => alert("Submitted")}
            disabled={!enableNext}
            testId="submit-button"
          >
            Submit
          </Button>
        )}
      </section>
    </footer>
  )
}

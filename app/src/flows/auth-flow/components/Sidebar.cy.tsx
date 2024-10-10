import { SidebarType } from "../AuthFlow.types"
import { Sidebar } from "./Sidebar"

describe("[auth-flow] Sidebar", () => {
  it("should render the sidebar with three steps showcasing the active, completed and upcoming states", () => {
    const data: SidebarType = {
      1: {
        id: 1,
        title: "Add login details",
        active: false
      },
      2: {
        id: 2,
        title: "Select the user group",
        active: true
      },
      3: {
        id: 3,
        title: "Submit the form",
        active: false
      }
    }
    cy.mount(<Sidebar data={data} />)
    cy.get('[data-active="true"]').should("have.length", 1)
    cy.get('[data-completed="true"]').should("have.length", 1)
    cy.get('[data-testid="sidebar-step_1"]').should("have.length", 1)
    cy.get('[data-testid="sidebar-step_2"]').should("have.length", 1)
    cy.get('[data-testid="sidebar-step_3"]').should("have.length", 1)
  })
})

import "./commands"
import "../../src/App.css"

import { mount } from "cypress/react18"
import React from "react"

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
    }
  }
}

Cypress.Commands.add("mount", (component, options = {}) => {
  const wrapped = <div>{component}</div>

  return mount(wrapped, options)
})

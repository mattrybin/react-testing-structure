/// <reference types="cypress" />
import { defineConfig } from "cypress"

export default defineConfig({
  viewportWidth: 1200,
  viewportHeight: 800,
  pageLoadTimeout: 60000,
  e2e: {
    specPattern: "src/**/*.e2e.ts",
    supportFile: false
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite"
    },
    specPattern: "src/**/*.cy.{ts,tsx}"
  }
})

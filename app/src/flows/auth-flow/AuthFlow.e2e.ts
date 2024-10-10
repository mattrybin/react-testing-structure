/// <reference types="cypress" />
describe("AuthFlow", () => {
  describe("Add New User Profile", { testIsolation: false }, () => {
    before(() => {
      cy.visit("http://localhost:3001")
    })
    it("should be on correct page", () => {
      cy.contains("Add New User Profile").should("be.visible")
    })
    context("Inside Step 1", () => {
      it("should be on correct step", () => {
        cy.get('[data-testid="sidebar-step_1"]').should("have.attr", "data-active", "true")
      })
      it("Fill out the email and check buttons", () => {
        cy.get('[data-testid="email"]').type("newuser@example.com")
        cy.get('[data-testid="previous-button"]').should("be.disabled")
        cy.get('[data-testid="next-button"]').should("be.disabled")
      })
      it("should fill out password", () => {
        cy.get('[data-testid="password"]').type("password123")
        cy.get('[data-testid="password-show-password"]').click()
        cy.get('[data-testid="password"]').should("have.attr", "type", "text")
        cy.get('[data-testid="password-show-password"]').click()
        cy.get('[data-testid="password"]').should("have.attr", "type", "password")
        cy.get('[data-testid="password-verify"]').type("password123")
      })
      it("Go next page and check if I can go back", () => {
        cy.get('[data-testid="next-button"]').click()
        cy.get('[data-testid="previous-button"]').should("be.not.disabled")
        cy.get('[data-testid="previous-button"]').click()
        cy.get('[data-testid="email"]').should("be.visible")
        cy.get('[data-testid="next-button"]').click()
      })
    })

    context("Inside Step 2", () => {
      it("should be on correct step", () => {
        cy.get('[data-testid="sidebar-step_1"]').should("have.attr", "data-completed", "true")
        cy.get('[data-testid="sidebar-step_2"]').should("have.attr", "data-active", "true")
      })
      it("fill out the user group", () => {
        cy.get('[data-testid="user-group"]').select("Group A")
        cy.get('[data-testid="next-button"]').click()
      })
    })
    context("Inside Step 3", () => {
      it("should be on correct step", () => {
        cy.get('[data-testid="sidebar-step_2"]').should("have.attr", "data-completed", "true")
        cy.get('[data-testid="sidebar-step_3"]').should("have.attr", "data-active", "true")
      })
      it("check if readonly", () => {
        cy.get('[data-testid="email"]').should("have.attr", "readonly")
        cy.get('[data-testid="user-group"]').should("have.attr", "readonly")
      })
      it("submit form", () => {
        cy.get('[data-testid="submit-button"]').click()
        cy.on("window:alert", (str) => {
          expect(str).to.equal("Submitted")
          return true
        })
      })
    })

    context("After submit", () => {
      it("reset form", () => {
        cy.get('[data-testid="reset-button"]').click()
        cy.get('[data-testid="sidebar-step_1"]').should("have.attr", "data-active", "true")
        cy.get('[data-testid="email"]').should("have.value", "")
        cy.get('[data-testid="previous-button"]').should("be.disabled")
        cy.get('[data-testid="next-button"]').should("be.disabled")
        cy.get('[data-testid="reset-button"]').should("be.disabled")
      })
    })
  })
})

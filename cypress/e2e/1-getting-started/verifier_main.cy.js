/// <reference types="cypress" />

describe("Verifier App", () => {
  beforeEach(() => {
    cy.visit(
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/?page=1&sort=id,asc"
    );
  });
  it("Tasks are displayed by default", () => {
    cy.get("[data-cy='TaskHeading']").should("be.visible");
  });
});

describe("Verifier App", () => {
  beforeEach("Open Verifier app", () => {
    cy.visit("/?page=1&sort=id,asc");
    // cy.log("Current baseUrl" + Cypress.config('baseUrl'))
  });
  it("Navbar are displayed", () => {
    cy.get("[data-cy='navbar']").should("be.visible");
    cy.get("img").should("be.visible");
    cy.get(".brand-title > span").should("be.visible");
    cy.get(".navbar-version").should("be.visible");
    cy.get(":nth-child(1) > .d-flex").should("be.visible");
    cy.get(":nth-child(1) > .d-flex").click();
    cy.get(":nth-child(2) > .d-flex").should("be.visible");
    cy.get(":nth-child(2) > .d-flex").click();
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible");
    cy.get("[data-cy='accountMenu'] > .d-flex").click();
  });
});

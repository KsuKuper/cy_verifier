const registerData = require("../../fixtures/registerData.json");
beforeEach(() => {
  cy.visit("/?page=1&sort=id,asc");
  cy.log("Current baseUrl" + Cypress.config("baseUrl"));
});
describe("Verifier App", () => {
  afterEach(() => {
    cy.cleanupData();
  });
  it("Navbar is displayed", () => {
    cy.get("[data-cy='navbar']").should("be.visible");
  });
  it("Registration", () => {
    cy.fixture("registerData").then((data) => {
      data.forEach((registerData) => {
        cy.register(
          registerData.username,
          registerData.email,
          registerData.password,
          registerData.passwordConfirm
        );
      });
    });
  });
});


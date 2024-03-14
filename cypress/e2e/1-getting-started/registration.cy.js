const registerData = require("../../fixtures/registerData.json");

describe("Verifier App", () => {
  beforeEach(() => {
    cy.visit("/?page=1&sort=id,asc");
    cy.log("Current baseUrl" + Cypress.config("baseUrl"));
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

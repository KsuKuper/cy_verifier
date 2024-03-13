const registerData = require("../../fixtures/loginData.json");
beforeEach(() => {
  cy.visit("/?page=1&sort=id,asc");
  cy.log("Current baseUrl" + Cypress.config("baseUrl"));
});
describe("Verifier App", () => {
  it("Navbar is displayed", () => {
    cy.get("[data-cy='navbar']").should("be.visible");
  });
  it("Login", () => {
    cy.fixture("loginData.json").then((loginData) => {
      loginData.forEach((loginData) => {
        cy.login(loginData.username, loginData.password);
        cy.get(".btn-secondary").click();
      });
    });
  });
});

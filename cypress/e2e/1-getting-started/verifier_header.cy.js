describe("Verifier App", () => {
  beforeEach("Open Verifier app", () => {
    Cypress.config(
      "baseUrl",
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com"
    );
    cy.visit("/?page=1&sort=id,asc");
    cy.log("Current baseUrl" + Cypress.config("baseUrl"));
  });
  it("Navbar are displayed", () => {
    cy.get("[data-cy='navbar']").should("be.visible");
  });
  it("Navbar are displayed the label", () => {
    cy.get("img").should("be.visible");
  });
  it("Navbar are displayed the brend", () => {
    cy.get(".brand-title > span").should("be.visible");
  });
  it("Navbar are displayed the vertion", () => {
    cy.get(".navbar-version").should("be.visible");
  });
  it("Navbar are displayed the home", () => {
    cy.get(":nth-child(1) > .d-flex").should("be.visible");
  });
  it("Navbar are displayed the language", () => {
    cy.checkLanguageDisplay();
  });
  it("Navbar are displayed the account for different users", () => {
    // Sing in by user
    cy.login("ksu158", "12345");
    cy.get(".btn-secondary").click();
    // Sign in by admin
    cy.login("admin_automation", "admin_automation");
    cy.get(".btn-secondary").click();
  });
});

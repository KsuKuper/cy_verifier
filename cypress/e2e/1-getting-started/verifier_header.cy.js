describe("Verifier App", () => {
  beforeEach("Open Verifier app", () => {
    cy.visit("/?page=1&sort=id,asc");
    // cy.log("Current baseUrl" + Cypress.config('baseUrl'))
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
    cy.get(":nth-child(2) > .d-flex").should("be.visible");
    cy.get(":nth-child(2) > .d-flex").click(); // selector #header-tabs > li:nth-child(2) > a - href="#" (заглушка)
    cy.get("[data-cy='accountMenu'] > .d-flex").should("have.length", 4); //ER = 4, AR = 1
  });
  it("Navbar are displayed the account", () => {
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible");
    cy.get("[data-cy='accountMenu'] > .d-flex").click(); // href="#" (заглушка)
    cy.get("[data-cy='accountMenu'] > .d-flex").should("have.length", 2); //ER = 2, AR = 1
    //sign in
    cy.get("[data-cy='login']").find("[a#login-item.dropdown-item]").click();
    cy.url("https://sqlverifier-live-6e21ca0ed768.herokuapp.com/login").should(
      "include",
      "/login"
    ); // ER = /login, AR = /account/register
    //register
    cy.get("[data-cy='register']")
      .find("#account-menu > div > a:nth-child(2)")
      .click();
    cy.url(
      "https://sqlverifier-live-6e21ca0ed768.herokuapp.com/account/register"
    ).should("include", "/account/register");
  });
});

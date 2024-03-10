describe("Verifier App", () => {
  beforeEach("Open Verifier app", () => {
    Cypress.config("baseUrl", "https://sqlverifier-live-6e21ca0ed768.herokuapp.com");
    cy.visit("/?page=1&sort=id,asc");
    cy.log("Current baseUrl" + Cypress.config('baseUrl'))
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
    cy.get(':nth-child(2) > .d-flex').should("be.visible");
    cy.get("#header-tabs > li:nth-child(2) > a").click();
    cy.get("#header-tabs > li.dropdown.show.nav-item > div > button:nth-child(1)").click();
    cy.get(":nth-child(1) > .d-flex").contains("Home");
    cy.get("#header-tabs > li:nth-child(2) > a").click();
    cy.get("#header-tabs > li:nth-child(2) > div > button:nth-child(2)").click();
    cy.get(":nth-child(1) > .d-flex").contains("Accueil");
    cy.get("#header-tabs > li:nth-child(2) > a").click();
    cy.get("#header-tabs > li:nth-child(2) > div > button:nth-child(3)").click();
    cy.get(":nth-child(1) > .d-flex").contains("Главная");
    cy.get("#header-tabs > li:nth-child(2) > a").click();
    cy.get("#header-tabs > li:nth-child(2) > div > button:nth-child(4)").click();
    cy.get(":nth-child(1) > .d-flex").contains("Головна");
  });
  it("Navbar are displayed the account", () => {
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible");

    //sign in by user
    cy.get("[data-cy='accountMenu'] > .d-flex").click(); 
    cy.get("[data-cy='login']").click();
    cy.get("[data-cy='username']").type("ksu158");
    cy.get("[data-cy='password']").type("12345");
    cy.get("[data-cy='submit']").click();
    cy.get('.btn-secondary').click();

    //sing in by admin
    cy.get("[data-cy='accountMenu'] > .d-flex").click(); 
    cy.get("[data-cy='login']").click();
    cy.get("[data-cy='username']").type("admin_automation");
    cy.get("[data-cy='password']").type("admin_automation");
    cy.get("[data-cy='submit']").click();
  });
});

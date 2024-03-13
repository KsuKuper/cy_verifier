Cypress.Commands.add("checkLanguageDisplay", () => {
  const languages = ["Home", "Accueil", "Главная", "Головна"];

  cy.get(":nth-child(2) > .d-flex").should("be.visible");
  cy.get("#header-tabs > li:nth-child(2) > a").click();
  for (let i = 0; i < languages.length; i++) {
    cy.get(
      "#header-tabs > li:nth-child(2) > div > button:nth-child(" + (i + 1) + ")"
    ).click();
    cy.get(":nth-child(1) > .d-flex").contains(languages[i]);
    cy.get("#header-tabs > li:nth-child(2) > a").click();
  }
});

Cypress.Commands.add("login", (username, password) => {
  cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible").click();
  cy.get("[data-cy='login']").click();
  cy.get("[data-cy='username']").type(username);
  cy.get("[data-cy='password']").type(password);
  cy.get("[data-cy='submit']").click();
});

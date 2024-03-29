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

Cypress.Commands.add(
  "register",
  (username, email, password, passwordConfirm) => {
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible").click();
    cy.get("[data-cy='register']").click();
    const formFields = {
      "[data-cy='username']": username,
      "[data-cy='email']": email,
      "[data-cy='firstPassword']": password,
      "[data-cy='secondPassword']": passwordConfirm,
    };
    Object.keys(formFields).forEach((selector) => {
      cy.get(selector).should("exist").type(formFields[selector]);
    });
    cy.get("[data-cy='submit']").should("exist").click();
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible").click();
    cy.get("[data-cy='login']").click();
    cy.get(".btn-secondary").click();
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible").click();
    cy.get("[data-cy='register']").click();
  }
);

Cypress.Commands.add(
  "login",
  (username, password) => {
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible").click();
    cy.get("[data-cy='login']").click();
    const formFields = {
      "[data-cy='username']": username,
      "[data-cy='password']": password
    };
    Object.keys(formFields).forEach((selector) => {
      cy.get(selector).should("exist").type(formFields[selector]);
    });
    cy.get("[data-cy='submit']").click();
    cy.get("[data-cy='submit']").should("exist").click();
  }
);

import { pageLogin } from "../../pages/pageLogin";

describe("Verifier App", () => {
  it("login user", () => {
    // let pageLogin = new PageLogin();
    cy.visit("/?page=1&sort=id,asc");
    cy.get("[data-cy='navbar']").should("be.visible");
    cy.get("[data-cy='accountMenu'] > .d-flex").should("be.visible").click();
    cy.get("[data-cy='login']").click({force: true});

    //sign in by users
    let login = new pageLogin();
    login.userLogin("admin_automation", "admin_automation");
  });
});

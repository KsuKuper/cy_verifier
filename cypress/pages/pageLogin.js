export class pageLogin {
  elements = {
    loginFild: () => cy.get("[data-cy='username']"),
    passwordFild: () => cy.get("[data-cy='password']"),
    loginBtn: () => cy.get("[data-cy='submit']"),
  };

  userLogin(username, password) {
    this.elements.loginFild().type(username);
    this.elements.passwordFild().type(password);
    this.elements.loginBtn().click();
  }
}

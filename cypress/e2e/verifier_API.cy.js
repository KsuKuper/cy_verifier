describe("verifier API", () => {
  it("login POST", () => {
    cy.visit("/?page=1&sort=id,asc");
    let username = "admin_automation";
    let password = "admin_automation";

    //login
    cy.request({
      url: "/api/authenticate",
      method: "POST",
      body: {
        username: username,
        password: password,
        rememberMe: false,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id_token");
    });

    //create task
    cy.request({
      url: "/api/tasks",
      method: "POST",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzEwNTc0Mjg3LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMDQ4Nzg4N30.lLGZLjDR6XCwXw1phrVK0nQPiqSW8Xwg5yRnsDhexvtJ-sKEU273AFL7foOnez6PCsjWi7ebvVbqKR6n2mKTvg",
      },
      body: {
        title: "Task",
        text: "Did you create a new task?",
        answer: "I created a new task",
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property("id");
    });

    //get all tasks list
    cy.request({
      url: "/api/tasks?page=0&size=300",
      method: "GET",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbl9hdXRvbWF0aW9uIiwiZXhwIjoxNzEwNTc0Mjg3LCJhdXRoIjoiUk9MRV9BRE1JTiIsImlhdCI6MTcxMDQ4Nzg4N30.lLGZLjDR6XCwXw1phrVK0nQPiqSW8Xwg5yRnsDhexvtJ-sKEU273AFL7foOnez6PCsjWi7ebvVbqKR6n2mKTvg",
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});

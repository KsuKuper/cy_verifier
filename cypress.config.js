const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "33ivdp",
    "baseUrl": "https://sqlverifier-live-6e21ca0ed768.herokuapp.com",
    failOnStatusCode: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "33ivdp",   
    "baseUrl": "https://sqlverifier-staging-08050d656f7a.herokuapp.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

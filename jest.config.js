const base = require("./jest.base.config");

module.exports = {
  ...base,
  projects: [
    "<rootDir>/applications/*/jest.config,js",
    "<rootDir>/modules/*/*/jest.config.js"
  ],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverage: true,
  verbose: false
};

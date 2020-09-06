const base = require("./jest.config.base");

module.exports = {
  ...base,
  roots: ["<rootDir>/packages"],
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverage: true,
  verbose: false
};

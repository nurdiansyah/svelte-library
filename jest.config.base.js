module.exports = {
  roots: ["<rootDir>/src", "<rootDir>/tests"],
  transform: {
    ".(js|jsx|ts|tsx)": "@sucrase/jest-plugin"
  },
  testRegex: "(/(tests|__tests__)/.*.(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  coveragePathIgnorePatterns: ["((tests|__tests__)/.*.mock).(jsx?|tsx?)$"]
};

module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": "@sucrase/jest-plugin",
    "^.+\\.svelte$": ["svelte-jester", { preprocess: true }]
  },
  testRegex: "(/(tests|__tests__)/.*.(test|spec)).(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "svelte"],
  coveragePathIgnorePatterns: ["((tests|__tests__)/.*.mock).(jsx?|tsx?)$"],
  bail: false
};

// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "select",
    name: "_project",
    choices: ["components-base", "icons", "ui"],
    message: "project name ?"
  },
  {
    type: "select",
    name: "_category",
    message: "category name?",
    choices: ["data-display", "feedback", "inputs", "layout", "navigation", "surfaces", "utils"]
  },
  {
    type: "input",
    required: true,
    name: "_name",
    message: "component name?"
  },
  {
    type: "select",
    name: "_utils",
    message: "utils location?",
    choices: ["@deboxsoft/components-base/utils", "../utils"]
  }
];

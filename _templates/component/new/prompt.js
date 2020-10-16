// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    initial: "components-base",
    type: "input",
    name: "_project",
    required: true,
    message: "project name ?"
  },
  {
    type: "input",
    required: true,
    name: "_name",
    message: "component name?"
  },
  {
    type: "input",
    required: true,
    name: "_category",
    message: "category name?"
  }
];

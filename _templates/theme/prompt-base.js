// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
module.exports = [
  {
    type: "input",
    name: "_theme",
    message: "theme ?"
  },
  {
    type: "input",
    name: "_category",
    message: "category component?"
  },
  {
    type: "input",
    required: true,
    name: "_name",
    message: "component name?"
  }
];

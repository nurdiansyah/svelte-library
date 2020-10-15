function format(input) {
  if (typeof input === "number") return `${input}px`;
  return input;
}

/**
 * @param node {Element}
 * @param styles {Object}
 */
export const createVarStyle = (node, _styles) => {
  let styles = _styles;
  Object.entries(styles).forEach(([key, value]) => {
    if (value) node.style.setProperty(`--${key}`, format(value));
  });

  return {
    update(newStyles) {
      Object.entries(newStyles).forEach(([key, value]) => {
        if (value) {
          node.style.setProperty(`--${key}`, format(value));
          delete styles[key];
        }
      });

      Object.keys(styles).forEach((name) => node.style.removeProperty(`--${name}`));

      styles = newStyles;
    }
  };
};

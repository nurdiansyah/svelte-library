function format(input) {
  if (typeof input === "number") return `${input}px`;
  return input;
}

/**
 * @param node {Element}
 * @param styles {Object}
 */
export const styleObject = (node, _styles) => {
  let styles = _styles;
  Object.entries(styles).forEach(([key, value]) => {
    if (value) node.style.setProperty(key, format(value));
  });

  return {
    update(newStyles) {
      Object.entries(newStyles).forEach(([key, value]) => {
        if (value) {
          node.style.setProperty(key, format(value));
          delete styles[key];
        }
      });

      Object.keys(styles).forEach((name) => node.style.removeProperty(`--${name}`));

      styles = newStyles;
    }
  };
};

export const cssVariable = (node, props) => {
  Object.entries(props).forEach(([key, value]) => {
    node.style.setProperty(`--${key}`, value);
  });

  return {
    update(new_props) {
      Object.entries(new_props).forEach(([key, value]) => {
        node.style.setProperty(`--${key}`, value);
        delete props[key];
      });

      Object.keys(props).forEach((name) => node.style.removeProperty(`--${name}`));
      props = new_props;
    }
  };
};

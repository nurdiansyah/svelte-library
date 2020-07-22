const sveltePreprocess = require("svelte-preprocess");

const createPreprocess = (options) => {
  const scss = options.scss || {};
  return sveltePreprocess({
    scss: Object.assign(scss, {
      implementation: require("sass"),
      renderSync: true
    }),
    postcss: {
      plugins: [require("autoprefixer")]
    },
    typescript: {
      tsconfigFile: "tsconfig.json"
    }
  });
};
const preprocess = createPreprocess({
  scss: {
    includePaths: []
  }
});
module.exports = {
  preprocess,
  createPreprocess
};

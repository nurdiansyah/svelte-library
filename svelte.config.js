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
      typescript: require("typescript"),
      compilerOptions: {
        allowJs: true
      }
    }
  });
};
const preprocess = createPreprocess({
  scss: {
    includePaths: ["./packages/components-base", "./packages/website/src/theme"]
  }
});
module.exports = {
  preprocess,
  createPreprocess
};

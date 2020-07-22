const path = require("path");

module.exports = {
  stories: ["../stories/**/*.stories.[tj]s"],
  addons: [
    "@storybook/addon-storysource",
    "@storybook/addon-actions",
    "@storybook/addon-links",
    "@storybook/addon-notes",
    "@storybook/addon-knobs",
    "@storybook/addon-backgrounds",
    "@storybook/addon-viewport",
    "@storybook/addon-options",
    "@storybook/addon-a11y"
  ],
  webpackFinal: (config) => {
    config.resolve = {
      alias: Object.assign(config.resolve.alias, {
        "@deboxsoft/svelte-bootstrap": path.resolve(
          __dirname,
          "../packages/bootstrap"
        )
      }),
      extensions: [...config.resolve.extensions, ".ts", ".tsx"]
    };
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("@sucrase/webpack-loader"),
          options: {
            transforms: ["typescript"]
          }
        }
      ]
    });
    const svelteLoader = config.module.rules.find(
      (r) => r.loader && r.loader.includes("svelte-loader")
    );
    svelteLoader.options = {
      preprocess: require("../svelte.config.js").preprocess
    };
    config.module.rules.push({
      test: [/\.stories\.[jt]s$/, /index\.[jt]s$/],
      loaders: [require.resolve("@storybook/source-loader")],
      include: [path.resolve(__dirname, "../stories")],
      enforce: "pre"
    });
    return config;
  }
};

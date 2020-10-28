import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import sucrase from "@rollup/plugin-sucrase";
import { terser } from "rollup-plugin-terser";
import bundleSize from "rollup-plugin-bundle-size";

const tsPlugin = () => {
  return sucrase({
    transforms: ["typescript"],
    exclude: ["**/*.css"]
  });
};

export const sveltePlugin = (options = {}) => {
  return svelte(options);
};

export const resolvePlugin = (options = {}) => {
  return {
    ...{
      dedupe: ["svelte"],
      browser: true
    },
    ...options
  };
};

/**
 * create configuration rollup.
 * @param {Object} options
 * @param {Object} options.svelte
 * @param {Object[]} options.startPlugins
 * @param {Object[]} options.endPlugins
 * @param {*} options.output
 * @param {*} options.input
 * @param {boolean} options.dev
 */
export const createConfigRollup = (options = {}) => {
  const mode = process.env.ROLLUPP_WATCH && "development";
  const dev = options.dev || mode === "development";
  const startPlugins = options.startPlugins || [];
  const endPlugins = options.endPlugins || [];
  return {
    input: options.input,
    output: options.output,
    plugins: [
      ...startPlugins,
      resolve({
        browser: true,
        dedupe: ["svelte"]
      }),
      commonjs(),
      tsPlugin(),
      !dev &&
        terser({
          module: true
        }),
      !dev && bundleSize(),
      ...endPlugins
    ],
    preserveEntrySignatures: false,
    external: ["tslib"]
  };
};

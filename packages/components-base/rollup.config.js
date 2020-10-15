import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import sucrase from "@rollup/plugin-sucrase";
import { terser } from "rollup-plugin-terser";
import bundleSize from "rollup-plugin-bundle-size";
import pkg from "./package.json";

const createPreprocess = require("../../svelte.config").createPreprocess;

const mode = process.env.ROLLUPP_WATCH && "development";
const dev = mode === "development";
const preprocess = createPreprocess({
  scss: {
    includePaths: ["./"]
  }
});

const tsPlugin = () => {
  return sucrase({
    transforms: ["typescript"],
    exclude: ["**/*.css"]
  });
};

const output = () => [
  { file: pkg.module, sourcemap: true, format: "es" },
  { file: pkg.main, sourcemap: true, format: "umd", name: "CompBaseUI", globals: { tslib: "tslib" } }
];

export default [
  {
    input: "index.ts",
    output: output("libs"),
    plugins: [
      svelte({
        preprocess,
        dev,
        hydratable: true
      }),
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
      !dev && bundleSize()
    ],
    preserveEntrySignatures: false,
    external: ["tslib"]
  }
];

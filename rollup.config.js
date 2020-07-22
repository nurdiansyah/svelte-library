import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import sucrase from "@rollup/plugin-sucrase";
import typesccript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import { preprocess } from "./svelte.config";
import pkg from "./package.json";

const mode = process.env.NODE_ENV || "development";
const dev = mode === "development";

const onwarn = (warning, _onwarn) => {
  if (warning.code === "anchor-is-valid" || warning.code === "a11y-autofocus")
    return;

  if (warning.code === "css-unused-selector" && warning.frame.includes("shape"))
    return;
  if (
    warning.code === "CIRCULAR_DEPENDENCY" &&
    /[/\\]@sapper[/\\]/.test(warning.message)
  )
    return;
  _onwarn(warning);
};

const tsPlugin = () => {
  if (dev) {
    return sucrase({
      transforms: ["typescript"],
      exclude: ["**/*.css"]
    });
  } else {
    return typesccript({
      include: "src/**",
      typescript: require("typescript")
    });
  }
};

export default {
  client: {
    input: config.client.input().replace(/\.js$/, ".ts"),
    output: config.client.output(),
    plugins: [
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        preprocess,
        dev,
        hydratable: true,
        emitCss: true
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
        })
    ],

    preserveEntrySignatures: false,
    onwarn
  },

  server: {
    input: config.server.input().server.replace(/\.js$/, ".ts"),
    output: config.server.output(),
    plugins: [
      replace({
        "process.browser": false,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      svelte({
        preprocess,
        generate: "ssr",
        dev
      }),
      resolve({
        dedupe: ["svelte"]
      }),
      commonjs(),
      tsPlugin()
    ],
    external: Object.keys(pkg.dependencies).concat(
      require("module").builtinModules ||
        Object.keys(process.binding("natives"))
    ),

    preserveEntrySignatures: "strict",
    onwarn
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        "process.browser": true,
        "process.env.NODE_ENV": JSON.stringify(mode)
      }),
      commonjs(),
      !dev && terser()
    ],

    preserveEntrySignatures: false,
    onwarn
  }
};

import { bundle } from "@nurdiansyah/rollup/configs/esbuild.config";

export default [
  ...bundle({
    input: "src/index.ts",
    output: "index.js"
  })
];

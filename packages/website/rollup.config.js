import { mdsvex } from "mdsvex";
import slug from "remark-slug";
import { createRollupConfigs } from "../../configs/rollup-base-config";

const createPreprocess = require("../../svelte.config").createPreprocess;

const production = !process.env.ROLLUP_WATCH;
const preprocess = createPreprocess({
  scss: {
    includePaths: ["./src", "../components-base"]
  }
});
const mdsvexPreprocess = mdsvex({
  extensions: [".svx", ".md"],
  remarkPlugins: [slug],
  layout: {
    blogpost: "./src/pages/blog/_components/Layout.svelte",
    default: "./src/components/layouts/LayoutMDDefault.svelte"
  }
});

export const config = {
  staticDir: "static",
  distDir: "dist",
  buildDir: "build",
  serve: !production,
  production,
  rollupWrapper: (cfg) => cfg,
  svelteWrapper: (svelte) => {
    return {
      ...svelte,
      ...{
        preprocess: [preprocess, mdsvexPreprocess],
        extensions: [".svelte", ".md", ".svx"]
      }
    };
  },
  swWrapper: (cfg) => cfg
};

const configs = createRollupConfigs(config);
export default configs;

/** wrapper example 1 */
// svelteWrapper: (cfg, ctx) => ({
//   ...cfg,
//   preprocess: mdsvex({ extension: '.md' }),
// })

/** wrapper example 2 */
// rollupWrapper: cfg => {
//   cfg.plugins = [...cfg.plugins, myPlugin()]
//   return cfg
// }

import { resolve } from "path";
import typescript from "rollup-plugin-typescript2";
import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

const exclude_list = [
  "../../**/node_modules/**",
  "../../**/.svelte-kit/**",
  "../../**/functions/*",
  "../../**/static/*",
  "../../**/dist/**",
  "../../**/build/**",
  "../../**/.svelte/**",
  "../../**/.vercel_build_output/**",
  "../../**/.vercel/**",
  "../../**/coverage/**",
  "../../**/_/**",
  "../../**/vite.config.js.timestamp-*",
  "../../**/vite.config.ts.timestamp-*",
];
const include_list = ["../../**/*.ts+(|x)"];

const rollup_typescript_config = {
  check: false, // Otherwise breaks build with lint errors
  tsconfig: "tsconfig.json", // To throw error if no local tsconfig.json found
  include: include_list, // Mandatoty to import TS modules from the monorepo
  exclude: exclude_list, // To ensure good perf
};

export default defineConfig({
  esbuild: false,
  plugins: [typescript(rollup_typescript_config), sveltekit()],
  resolve: {
    alias: {
      // PS : Have to duplicate in tsconfig.json for linting!
      $src: resolve(__dirname, "./src"),
      $lib: resolve(__dirname, "./src/lib"),
    },
  },
});

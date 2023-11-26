import { resolve } from "path";
import { defineConfig } from "vite";

import { sveltekit } from "@sveltejs/kit/vite";
// Correctly Resolved by TS,
// Is resolved on dev server and during build
// BUT NOT resolved by ESLint : Unable to resolve path to module '@sveltejs/kit/vite'.eslintimport/no-unresolved

export default defineConfig({
  plugins: [sveltekit()],
  resolve: {
    alias: {
      // PS : Have to duplicate in tsconfig.json for linting!
      $src: resolve(__dirname, "./src"),
      $lib: resolve(__dirname, "./src/lib"),
    },
  },
});

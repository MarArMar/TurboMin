import { resolve } from "path";
import { defineConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

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

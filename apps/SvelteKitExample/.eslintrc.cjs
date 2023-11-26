// Not working : do not resolve files in svlete files
const path = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/base.js"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    // Is overriden in each project
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },

  overrides: [
    {
      // From https://github.com/sveltejs/eslint-plugin-svelte
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "@typescript-eslint/no-inferrable-types": "off",
      },
    },
  ],

  settings: {
    // From https://github.com/eslint/eslint/discussions/14667
    // And https://www.npmjs.com/package/eslint-import-resolver-alias
    "import/resolver": {
      "eslint-import-resolver-custom-alias": {
        alias: {
          $src: "./src",
          $lib: "./src/lib",
        },
        extensions: [".js", ".ts", ".d.ts", ".json"],
        packages: ["packages/*"],
      },
      // alias: {
      //   map: [
      //     ["$src", path.resolve(__dirname, "./src")],
      //     ["$lib", path.resolve(__dirname, "./src/lib")],
      //   ],
      //   extensions: [".js", ".ts", ".d.ts", ".json"],
      // },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};

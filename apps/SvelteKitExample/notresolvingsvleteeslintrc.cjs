// Not working : do not resolve files in svlete files

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
    "import/resolver": {
      alias: {
        map: [
          ["$src", "./src"],
          ["$lib", "./src/lib"],
        ],
        extensions: [".js", ".ts", ".d.ts", ".json"],
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".ts", ".json"],
      },
      // https://github.com/import-js/eslint-import-resolver-typescript
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};

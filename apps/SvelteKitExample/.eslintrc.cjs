/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/base.js"],
  // parser: '@typescript-eslint/parser',

  parser: "svelte-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    project: "./tsconfig.json",
  },
  // parserOptions: {
  //   project: './tsconfig.json',
  // },
};

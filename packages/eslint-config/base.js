// Global ESLint config file
// const rules = require('./rules').rules

const rules = {
  "@typescript-eslint/no-inferrable-types": "off",
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    // Is overriden in each project
    project: "./tsconfig.json",
  },

  parser: "@typescript-eslint/parser",
  extends: [
    // "airbnb-base",
    // "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    // "plugin:@typescript-eslint/recommended-requiring-type-checking",
    // "plugin:eslint-comments/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:svelte/recommended",
    // "prettier",
    "turbo",
  ],
  plugins: [
    "svelte3",
    "@typescript-eslint",
    "eslint-plugin-tsdoc",
    "@stylistic",
  ],
  ignorePatterns: [
    "*.cjs",
    ".eslintrc.cjs",
    ".eslintrc.js",
    "svelte.config.js",
    "*.min.js",
    "node_modules/",
    "dist/",
    "build/",
    "coverage/",
    ".svelte-kit/",
    ".vercel/",
    ".netlify/",
  ],
  overrides: [
    {
      files: ["*.svelte"],
      processor: "svelte3/svelte3",
      rules: rules,
    },
  ],
  settings: {
    "svelte3/typescript": () => require("typescript"),
  },

  env: {
    browser: true,
    node: true,
    es2020: true,
    commonjs: true,
  },

  rules: rules,
};

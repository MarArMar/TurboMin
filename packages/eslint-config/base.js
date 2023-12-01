// Global ESLint config file

// From https://turbo.build/repo/docs/handbook/linting/eslint
// const { resolve } = require('node:path')
// const project = resolve(process.cwd(), 'tsconfig.json')

const rules = require("./rules").rules;

/** @type { import('eslint').Linter.FlatConfig } */
module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",

  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },

  plugins: ["@typescript-eslint", "eslint-plugin-tsdoc", "@stylistic"],

  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:eslint-comments/recommended",
    // From https://github.com/sveltejs/eslint-plugin-svelte
    "plugin:svelte/base",
    "plugin:svelte/recommended",
    "prettier",
    "turbo",
  ],

  ignorePatterns: [
    "*.cjs",
    ".eslintrc.cjs",
    ".eslintrc.js",
    "svelte.config.js",
    // 'scripts/js/*.ts',
    // 'static/*.js',
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
      // From https://github.com/sveltejs/eslint-plugin-svelte
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      // * IMPORTS SORTING
      // From https://haseebmajid.dev/posts/2023-01-10-how-to-autosort-our-sveltekit-imports/
      // *
      rules: {
        ...rules,
      },
    },
  ],

  // TODO: Disable some globals per module
  env: {
    browser: true,
    node: true,
    // es2017: true,
    es2020: true,
    commonjs: true,
    // From https://stackoverflow.com/questions/30018271/javascript-standard-style-does-not-recognize-mocha
    // Avoids 'describe' is not defined.
    mocha: true,
  },

  globals: {
    // From https://stackoverflow.com/questions/45317154/error-is-not-defined-no-undef/46100803
    // Should be only if using lodash so not here
    // _: true, // Avoids error '_' is not defined no-undef
    // "process":true,
    // Env vars (false means read-only)
    VERCEL: false,
    CF_PAGES: false,
    FLY_APP_NAME: false,
    DETA_SPACE_APP: false,
    NETLIFY: false,
    AWS_EXECUTION_ENV: false,
    NODE_ENV: false,
  },
  rules: rules,
};

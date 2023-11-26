// Global ESLint config file

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  parser: "@typescript-eslint/parser",
  
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    // Is overriden in each project
    project: "./tsconfig.json",
    extraFileExtensions: [".svelte"], // This is a required setting in `@typescript-eslint/parser` v4.24.0.
  },

  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:svelte/base",
    "plugin:svelte/recommended",
    "turbo",
  ],
  plugins: ["@typescript-eslint"],
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
  env: {
    browser: true,
    node: true,
    es2020: true,
    commonjs: true,
  },
  rules: {
    "@typescript-eslint/no-inferrable-types": "off",
  },
};

// Not working as well

const path = require("path");

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  root: true,
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
  settings: {
    // From https://github.com/eslint/eslint/discussions/14667
    // And https://www.npmjs.com/package/eslint-import-resolver-alias
    "import/resolver": {
      alias: {
        map: [
          ["$src", path.resolve(__dirname, "./src")],
          ["$lib", path.resolve(__dirname, "./src/lib")],
        ],
        extensions: [".js", ".ts", ".d.ts", '.json'],
      },
      node: {
        paths: ["src"],
        extensions: [".js", ".ts", ".d.ts", '.json'],
      },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};

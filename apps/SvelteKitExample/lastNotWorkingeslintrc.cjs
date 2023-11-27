// Not working : do not resolve files in svelte files
/*
Used devDependencies : 
  "devDependencies": {
    "@repo/eslint-config": "workspace:*",
    "@sveltejs/adapter-auto": "^2.1.0",
    "@sveltejs/kit": "^1.25.1",
    "@types/eslint": "^8.44.7",
    "@types/node": "18.17.1",
    "@typescript-eslint/eslint-plugin": "^5.45.0",
    "@typescript-eslint/parser": "^5.59.2",
    "eslint": "^8.54.0",
    "eslint-config-turbo": "^1.10.14",
    "eslint-plugin-svelte": "^2.32.1",
    "svelte": "^4.2.1",
    "svelte-check": "^3.5.2",
    "ts-node": "^10.9.1",
    "tsconfig": "workspace:*",
    "tslib": "^2.6.1",
    "typescript": "^5.2.2",
    "vite": "^4.4.11"
  }
  */


const path = require("path");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@repo/eslint-config/base.js"],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    // Is overridden in each project
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

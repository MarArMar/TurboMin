// This configuration only applies to the package manager root.
// Doc : https://turbo.build/repo/docs/handbook/linting/eslint
/** @type {import("eslint").Linter.Config} */
module.exports = {
  ignorePatterns: ['apps/**', 'packages/**'],
  extends: ['@repo/eslint-config/base.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
}
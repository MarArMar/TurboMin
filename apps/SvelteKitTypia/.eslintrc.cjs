/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@repo/eslint-config/base.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        // This loads <rootdir>/tsconfig.json to eslint
        project: './tsconfig.json',
      },
    },
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx'],
  //     },
  //   },
  // },
}

// Past one :
// module.exports = {
//   extends: ['custom'],
//   parserOptions: {
//     // extraFileExtensions: ['.svelte'],
//     sourceType: 'module',
//     ecmaVersion: 2020, // 13, //2020
//     project: './tsconfig.json',
//   },
// }

/**
 * Generates ESLint rules with a given setting for a list of rule names.
 * @param {string[]} ruleNames - The names of the ESLint rules.
 * @param {string} [ruleSetting='off'] - The setting for the rules. Defaults to 'off'.
 * @returns {Record<string, string>} An object mapping rule names to their settings.
 */
function generateEslintRules(ruleNames, ruleSetting = "off") {
  return ruleNames.reduce((acc, rule) => {
    /**
     *  @param {Record<string, string>} acc
     *  @param {string} rule
     *  @returns {Record<string, string>}
     */
    acc[rule] = ruleSetting;
    return acc;
  }, {});
}

// cSpell:ignore eslintimport plusplus
const ruleNames = [
  "no-underscore-dangle", // Allow use of '_' in variable names
  "no-param-reassign", // Allow reassigning function parameters
  "guard-for-in", // Allow for in loops without if statement0
  "arrow-body-style", // Allow arrow functions to have { bodies }
  "no-continue", // Allow use of continue
  "no-void", // Allow use of void
  // 'no-plusplus',
  "operator-assignment", // Allow use of +=, -=, etc
  "prefer-destructuring", // Prefer use of destructuring
  "object-shorthand", // Prefer use of { x } instead of { x: x }
  "max-classes-per-file",
  "radix", // Allow parseInt without radix
  // 'import/no-absolute-path',
  "a11y-click-events-have-key-events", // Allow click events without key events
  // 'eslint-comments/no-unlimited-disable',
  // 'no-unlimited-disable',
  // 'no-alert', // Allow use of alert
  // 'import/no-unresolved',
  "import/order",
  // 'import/first', // Allow imports after code
  // 'import/no-duplicates', // Allow duplicate imports
  "import/no-mutable-exports", // Allow mutable exports
  "import/extensions", // Allow imports without extensions
  "@typescript-eslint/restrict-template-expressions",
  "no-else-return", // Disallow else after if => return
  "@typescript-eslint/no-unnecessary-type-assertion",
  "no-lonely-if", // Disallow else - if
  "no-constant-condition", // Disable if(true)
  "no-unused-expressions",
  "@typescript-eslint/naming-convention",
  "@typescript-eslint/ban-ts-comment", // Allow @ts-ignore
  "@typescript-eslint/no-inferrable-types", // Allow inferrable types

  // Allow unused vars
  "@typescript-eslint/no-unused-vars",
  "eslint/no-unused-vars",
  "no-unused-vars",

  // Allow /* eslint-disable */ and /* eslint-enable */
  "eslint-comments/disable-enable-pair",
  "comments/disable-enable-pair",
  "disable-enable-pair",

  "prefer-template", // Prefer use of template strings
  "import/prefer-default-export", // Allow single exports
  /*
      Labeled statements are used with break or continue statements. They are simply identifiers with a colon after them, which you can refer to with your break or continue.
      
      loop1:
      for (let i = 0; i < 5; i++) {
        if (i === 1) {
          break loop1;
        }
      }
      */
  "no-labels",
  "no-restricted-syntax", // Allow for of loops
  "no-prototype-builtins", // Allow use of 'hasOwnProperty'
  // 'no-undef':'off', // Disable no use of let
  "no-console", // Allow console.log
  "no-inline-comments", // Allow inline comments
  "no-useless-escape", // Allow use of \ in strings

  // Does not replace " from '../stores/error' with  './error'
  "import/no-relative-parent-imports",
  "import/no-useless-path-segments",
  "@typescript-eslint/import/no-useless-path-segments",

  "@typescript-eslint/no-throw-literal", // Avoids linting the sveltekit "throw error()"
];

const rules = {
  ...generateEslintRules(ruleNames),
  // Warning for used semicolons,
  // see https://stackoverflow.com/questions/40453894/allow-semi-colons-in-javascript-eslint

  // Maybe migrate to stylistic https://eslint.style/guide/migration
  // semi: [1, 'never'],
  "@stylistic/semi": ["warn", "never"],
  "@stylistic/indent": ["warn", 2],
  "@stylistic/max-len": [
    "off",
    { code: 79 }, // Same as prettier, see .prettierrc.cjs
  ],
  "eslint-comments/no-unlimited-disable": "warn",
  "no-await-in-loop": "warn",

  "@typescript-eslint/return-await": "off", // Otherwise "auto-fixes" & removes awaits from expressions..

  // 'padding-line-between-statements': 'warn', // Deprecated
  // https://eslint.org/docs/latest/rules/padding-line-between-statements
  "@stylistic/padding-line-between-statements": [
    "warn",
    // { blankLine: 'always', prev: '*', next: 'export' },
    { blankLine: "always", prev: "*", next: "cjs-export" },
    { blankLine: "always", prev: "*", next: "function" },
    { blankLine: "always", prev: "*", next: "class" },
    { blankLine: "never", prev: "empty", next: "empty" },
  ],
  "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
  // 'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
  // 'tsdoc/syntax': 'warn',
  // * IMPORTS SORTING
  // 'import/order': [
  //   'warn',
  //   {
  //     alphabetize: {
  //       order: 'asc',
  //       caseInsensitive: true,
  //     },
  //     'newlines-between': 'always',
  //   },
  // ],
  "@typescript-eslint/restrict-template-expressions": [
    "warn",
    {
      allowNumber: true,
      allowBoolean: true,
      allowNullish: true,
      allowAny: true,
    },
  ],
};

module.exports = {
  rules,
};

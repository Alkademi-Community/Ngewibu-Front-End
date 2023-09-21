module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["@nuxtjs/eslint-config-typescript"],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {
    "arrow-body-style": "off",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "comma-spacing": ["error", { before: false, after: true }],
    "comma-dangle": ["error", "only-multiline"],
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/order": [
      2,
      {
        "newlines-between": "always",
        groups: ["external", "builtin", "internal"],
        alphabetize: {
          order: "asc",
          caseInsensitive: true
        },
        pathGroups: [
          {
            pattern: "vue*",
            group: "external",
            position: "before"
          },
          {
            pattern: "nuxt*",
            group: "external",
            position: "before"
          }
        ]
      }
    ],
    "import/prefer-default-export": "off",
    "linebreak-style": 0,
    "no-alert": ["warn"],
    "no-console": "error",
    "no-debugger": ["warn"],
    "no-else-return": "error",
    "no-multiple-empty-lines": "off",
    "no-magic-numbers": [
      "warn",
      {
        enforceConst: true,
        ignore: [-1, 0, 1, 2, 3]
      }
    ],
    "no-plusplus": "off",
    "no-param-reassign": "off",
    "no-unused-vars": ["warn"],
    "no-unused-expressions": ["off"],
    "space-before-function-paren": ["error", "never"],
    semi: "off",
    quotes: ["error", "double", { allowTemplateLiterals: true }],
    "vue/require-explicit-emits": "off",
    "vue/multi-word-component-names": "off",
    "vue/v-on-event-hyphenation": "off",
    "vue/attribute-hyphenation": "off"
  }
}

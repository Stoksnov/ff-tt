/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  "rules": {
    "quotes": ["error", "single"],
    "semi": ["error", "always"],
    "indent": ["error", 2],
    "no-multi-spaces": ["error"],
    "no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "space-before-function-paren": [
      "error",
      {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "always"
      }
    ],
    "no-fallthrough": "off",
    "comma-dangle": "off",
    "no-extra-boolean-cast": "off",
    "template-curly-spacing": ["error", "always"],
    "camelcase": [
      "error", {
        "ignoreDestructuring": true,
        "properties": "never"
      }
    ],
    "operator-linebreak": ["error", "before"],
    "no-async-promise-executor": "off",
    "import/first": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "vars": "all",
        "args": "after-used",
        "ignoreRestSiblings": false,
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/no-empty-interface": "off",
    "vue/html-self-closing": "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/no-multiple-template-root": "off",
    "vue/no-v-for-template-key": 0,
    "vue/html-indent": ["error", 2],
    "vue/max-attributes-per-line": ["error", {
      "singleline": 1,
      "multiline": 1
    }],
    "vue/first-attribute-linebreak": ["error", {
      "singleline": "ignore",
      "multiline": "below"
    }]
  }
}

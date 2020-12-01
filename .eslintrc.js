module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/prettier"],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off'
  },

  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/prettier'
  ]
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  rules: {
    semi: [2, 'never'],
  },
}

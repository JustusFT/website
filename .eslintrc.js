module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  globals: {
    graphql: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
}

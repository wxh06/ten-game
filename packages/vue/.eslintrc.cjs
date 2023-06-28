require('@rushstack/eslint-patch/modern-module-resolution')

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-airbnb',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  overrides: [
    {
      files: ['.*rc.*', '*.config.*'],
      env: { node: true },
      rules: {
        'global-require': 'off',
        'import/no-extraneous-dependencies': ['error', { devDependencies: true }]
      }
    }
  ]
}

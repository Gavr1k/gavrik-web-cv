module.exports = {
    root: true,
    env: {
      node: true,
      es2021: true,
    },
    parserOptions: {
      ecmaVersion: 2021,
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-recommended',
      '@vue/eslint-config-typescript/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['vue', '@typescript-eslint'],
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'prettier/prettier': 'warn'
    },
  };
  
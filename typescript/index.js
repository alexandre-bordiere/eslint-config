module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@typescript-eslint/strict'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    jsx: true,
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
    '@typescript-eslint/explicit-member-accessibility': [
      'error',
      {
        accessibility: 'explicit',
        overrides: {
          accessors: 'off',
          constructors: 'no-public',
          methods: 'off',
          parameterProperties: 'explicit',
          properties: 'explicit'
        }
      }
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-confusing-void-expression': 'error',
    '@typescript-eslint/no-redundant-type-constituents': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/no-useless-empty-export': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/prefer-readonly': 'error',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/sort-type-constituents': 'error',
    '@typescript-eslint/switch-exhaustiveness-check': 'error'
  }
}

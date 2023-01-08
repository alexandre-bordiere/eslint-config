module.exports = {
  extends: [
    'plugin:jest/recommended',
    'plugin:jest/style'
  ],
  rules: {
    'jest/no-conditional-in-test': 'error',
    'jest/no-duplicate-hooks': 'error',
    'jest/no-test-return-statement': 'error',
    'jest/prefer-equality-matcher': 'error',
    'jest/prefer-expect-resolves': 'error',
    'jest/prefer-hooks-in-order': 'error',
    'jest/prefer-hooks-on-top': 'error',
    'jest/prefer-lowercase-title': ['error', { ignore: ['describe'] }],
    'jest/prefer-mock-promise-shorthand': 'error',
    'jest/prefer-spy-on': 'error',
    'jest/prefer-strict-equal': 'error',
    'jest/require-top-level-describe': 'error',
  }
}

module.exports = {
  extends: 'eslint:recommended',
  plugins: ['import'],
  rules: {
    'array-callback-return': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'block-scoped-var': 'error',
    'camelcase': 'error',
    'curly': 'error',
    'default-case-last': 'error',
    'default-param-last': 'error',
    'dot-notation': 'error',
    'eol-last': ['error', 'always'],
    'eqeqeq': 'error',
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    'import/order': [
      'error',
      {
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        groups: [['builtin', 'external'], 'parent', 'sibling', 'index'],
        'newlines-between': 'always'
      }
    ],
    'new-cap': 'error',
    'newline-before-return': 'error',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-confusing-arrow': 'error',
    'no-constant-binary-expression': 'error',
    'no-constructor-return': 'error',
    'no-duplicate-imports': ['error', { 'includeExports': true }],
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-empty-static-block': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': ['error', { capIsConstructor: false }],
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': [
      'error',
      {
        groups: [
          ['&', '|', '^', '~', '<<', '>>', '>>>'],
          ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
          ['&&', '||'],
          ['in', 'instanceof']
        ]
      }
    ],
    'no-multi-str': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-func': 'error',
    'no-new-native-nonconstructor': 'error',
    'no-new-object': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-promise-executor-return': 'error',
    'no-return-assign': ['error', 'always'],
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unneeded-ternary': 'error',
    'no-unreachable-loop': 'error',
    'no-unused-private-class-members': 'error',
    'no-use-before-define': ['error', { functions: false }],
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-void': 'error',
    'object-shorthand': ['error', 'always'],
    'operator-assignment': ['error', 'always'],
    'prefer-const': 'error',
    'prefer-exponentiation-operator': 'error',
    'prefer-object-has-own': 'error',
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'sort-vars': ['error', { ignoreCase: true }]
  }
}
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      // experimentalObjectRestSpread: true,
      modules: true,
      legacyDecorators: true,
      jsx: true,
    },
    project: ['./tsconfig.json', './tsconfig.node.json'],
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: true },
    ],
    'import/extensions': [
      'error', 'always', {
        pattern: {
          'ts': 'never',
          'js': 'never',
          'tsx': 'never',
          'jsx': 'never',
        },
      },
    ],
    'import/no-unresolved': ['off'],
    'class-methods-use-this': ['off'],
    'radix': ['off'],
    'import/prefer-default-export': ['off'],
    'implicit-arrow-linebreak': ['off'],
    'no-trailing-spaces': [
      'error', {
        'skipBlankLines': true,
        'ignoreComments': true,
      },
    ],
    'max-len': [
      'error', {
        'code': 120,
      },
    ],

    'import/no-extraneous-dependencies': [
      'error', {
        'devDependencies': ['**/__tests__/*.ts', '**/__mocks__/*.ts', '**/__tests__/*.tsx', '**/__mocks__/*.tsx'],
      },
    ],

    'one-var': ['off'],

    // false positive https://github.com/typescript-eslint/typescript-eslint/issues/2483
    'no-shadow': 'off',
    'object-curly-newline': ["error", {
      "ObjectExpression": { "multiline": true, "minProperties": 1 },
      "ObjectPattern": { "multiline": true, "minProperties": 1 },
      "ImportDeclaration": { "multiline": true, "minProperties": 8 },
      "ExportDeclaration": { "multiline": true, "minProperties": 1 }
    }],
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/consistent-type-definitions': 'off',
    '@typescript-eslint/no-unused-expressions': [
      'error',
      {
        'allowShortCircuit': true,
        'allowTernary': true,
      },
    ],
    '@typescript-eslint/no-use-before-define': ['off'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { 'argsIgnorePattern': '^_' },
    ],
    '@typescript-eslint/explicit-module-boundary-types': [
      'error', {
        allowArgumentsExplicitlyTypedAsAny: true,
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      { 'ts-expect-error': 'allow-with-description' },
    ],
    '@typescript-eslint/no-empty-function': [
      'error',
      {
        'allow': [
          'methods',
          'asyncMethods',
        ],
      },
    ],

    'lines-between-class-members': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',

    'curly': ['error', 'multi-line', 'consistent'],
    'no-unused-vars': 'off',
    'jest/no-test-prefixes': 'off',
    'jest/no-focused-tests': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'complexity': [
      'error', {
        max: 6,
      },
    ],
    'block-scoped-var': 'error',
    'no-else-return': [
      'error', {
        allowElseIf: true,
      },
    ],
    'no-eval': 'error',
    'no-lone-blocks': 'error',
    'no-multi-spaces': 'error',
    'no-useless-return': 'error',
    'no-var': 'error',
    'no-console': [
      // 'error', {
      //   allow: ['warn', 'error'],
      // },
      'off',
    ],
    'no-throw-literal': 'error',
    'newline-per-chained-call': [
      'error', {
        ignoreChainWithDepth: 4,
      },
    ],
    'no-extra-boolean-cast': [
      'error', {
        enforceForLogicalOperands: true,
      },
    ],
    'no-fallthrough': 'error',
    'no-use-before-define': 'off',
    'no-case-declarations': 'off',
  },
  ignorePatterns: [
    'dist',
    'node_modules',
    'coverage',
    '__reports__',
    'vite.config.ts',
  ],
  globals: {},
}

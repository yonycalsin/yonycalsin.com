module.exports = {
  plugins: ['@typescript-eslint', 'testing-library', '@yonycalsin/import-sort'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  ignorePatterns: ['!.storybook'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@next/next/no-img-element': 'off',
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': true,
        'ts-check': false,
        minimumDescriptionLength: 3,
      },
    ],
    /**
     * @see https://github.com/jsx-eslint/eslint-plugin-react/issues/2628#issuecomment-984160944
     */
    'no-restricted-syntax': [
      'error',
      {
        selector: "ImportDeclaration[source.value='react'][specifiers.0.type='ImportDefaultSpecifier']",
        message: 'Default React import not allowed',
      },
    ],
    '@next/next/no-head-element': 'off',
  },
  overrides: [
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
    {
      files: ['server/**/*.[jt]s?(x)'],
      extends: ['plugin:@yonycalsin/import-sort/react'],
    },
    {
      files: ['src/**/*.[jt]s?(x)', 'pages/**/*.[jt]s?(x)'],
      rules: {
        '@yonycalsin/import-sort/typescript-react-imports': [
          'error',
          {
            modules: [
              'typings',
              'mock-server',
              'tests',
              'analytics',
              'services',
              'themes',
              'hooks',
              'screens',
              'layouts',
              'containers',
              'components',
              'utils',
            ],
          },
        ],
        '@yonycalsin/import-sort/typescript-react-exports': 'error',
      },
    },
  ],
}

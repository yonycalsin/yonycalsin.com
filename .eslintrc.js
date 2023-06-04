module.exports = {
  extends: [
    '@yonycalsin/typescript',
    '@yonycalsin/react',
    'plugin:@next/next/recommended',
    '@yonycalsin/prettier',
    'plugin:storybook/recommended',
  ],
  plugins: ['@yonycalsin/import-sort', 'import'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: [
    '.storybook',
    'tailwind.config.js',
    'next.config.js',
    'postcss.config.js',
    'jest.config.js',
    'cypress.config.ts',
    'cypress',
  ],
  rules: {
    '@next/next/no-img-element': 'off',
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
    'import/namespace': 'off',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@yonycalsin/import-sort/typescript-react-imports': [
      'error',
      {
        modules: [
          'typings',
          'mock-server',
          'tests',
          'analytics',
          'services',
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
      files: ['**/ui/**/*.[jt]s?(x)'],
      rules: {
        'react/no-multi-comp': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
}

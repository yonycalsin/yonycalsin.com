const fs = require('fs')
const path = require('path')

const internalModules = fs
   .readdirSync('src')
   .filter(name => !name.endsWith('.d.ts'))
   .map(name => name.replace(path.extname(name), ''))
   .join('|')

module.exports = {
   env: {
      node: true,
   },
   extends: ['react-app', 'plugin:prettier/recommended'],
   plugins: ['simple-import-sort'],
   rules: {
      'simple-import-sort/imports': [
         'error',
         {
            groups: [
               // Side effect imports.
               ['^\\u0000'],
               // Packages. `react` related packages come first.
               ['^react', '^@?\\w'],
               // Internal modules.
               [`^(${internalModules})(/.*|$)`],
               // Parent imports. Put `..` last.
               ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
               // Other relative imports. Put same-folder imports and `.` last.
               ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
               // Style imports.
               ['^.+\\.css$'],
            ],
         },
      ],
      'simple-import-sort/exports': 'error',
      'no-unused-vars': 'warn',
      'no-console': [
         'warn',
         {
            allow: ['warn', 'error'],
         },
      ],
      'import/no-anonymous-default-export': 'off',
   },
   overrides: [
      {
         files: ['*.ts', '*.tsx'],
         rules: {
            'no-unused-vars': 'off',
         },
      },
   ],
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
  displayName: '@yonycalsin/yonycalsin.com',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 50,
      functions: 75,
      lines: 80,
    },
  },
  moduleNameMapper: {
    // Optionals
    '^~/server/(.*)$': '<rootDir>/server/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
  modulePaths: ['<rootDir>/src'],
  testEnvironment: 'jest-environment-jsdom',
  snapshotSerializers: [],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/typings/**/*.*',
    '!src/tests/**/*.*',
    '!src/mock-server/**/*.*',
    '!src/services/**/*.*',
    '!src/assets/**/*.*',
    '!src/utils/constants/*.*',
  ],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  verbose: true,
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
const jestConfig = createJestConfig(customJestConfig)

module.exports = jestConfig

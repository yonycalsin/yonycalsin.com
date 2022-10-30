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
    '^/(.*)$': '<rootDir>/src/$1',
    /**
     * @todo add regex to handle global paths
     * @author yonycalsin
     */
    '^typings(.*)$': '<rootDir>/src/typings$1',
    '^assets(.*)$': '<rootDir>/src/assets$1',
    '^mock-server(.*)$': '<rootDir>/src/mock-server$1',
    '^tests(.*)$': '<rootDir>/src/tests$1',
    '^analytics(.*)$': '<rootDir>/src/analytics$1',
    '^services(.*)$': '<rootDir>/src/services$1',
    '^hooks(.*)$': '<rootDir>/src/hooks$1',
    '^screens(.*)$': '<rootDir>/src/screens$1',
    '^layouts(.*)$': '<rootDir>/src/layouts$1',
    '^containers(.*)$': '<rootDir>/src/containers$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',

    // Optionals
    '^~/server/(.*)$': '<rootDir>/server/$1',
  },
  moduleDirectories: ['node_modules', '<rootDir>/'],
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

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: '@yonycalsin/yonycalsin.com',
  //   coverageThreshold: {
  //     global: {
  //       statements: 80,
  //       branches: 70,
  //       functions: 75,
  //       lines: 80,
  //     },
  //   },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  moduleNameMapper: {
    '^/(.*)$': '<rootDir>/src/$1',

    /**
     * @todo add regex to handle global paths
     * @author yonycalsin
     */
    '^assets/(.*)$': '<rootDir>/src/assets/$1',
    '^typings/(.*)$': '<rootDir>/src/typings/$1',
    '^mock-server/(.*)$': '<rootDir>/src/mock-server/$1',
    '^analytics/(.*)$': '<rootDir>/src/analytics/$1',
    '^services/(.*)$': '<rootDir>/src/services/$1',
    '^themes/(.*)$': '<rootDir>/src/themes/$1',
    '^hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^screens/(.*)$': '<rootDir>/src/screens/$1',
    '^layouts/(.*)$': '<rootDir>/src/layouts/$1',
    '^containers/(.*)$': '<rootDir>/src/containers/$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utils/(.*)$': '<rootDir>/src/utils/$1',

    // Optionals
    '^~/server/(.*)$': '<rootDir>/server/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
  snapshotSerializers: ['@emotion/jest/serializer'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/index.{ts,tsx}',
    '!src/**/*.stories.tsx',
    '!src/typings/**/*.*',
    '!src/themes/**/*.*',
    '!src/screens/**/*.*',
    '!src/mock-server/**/*.*',
    '!src/services/**/*.*',
    '!src/assets/**/*.*',
    '!src/utils/constants/*.*',
  ],
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)

import * as React from 'react'
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import dayjs from 'dayjs'
import isToday from 'dayjs/plugin/isToday'
import isYesterday from 'dayjs/plugin/isYesterday'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)

dayjs.extend(timezone)

dayjs.extend(isToday)

dayjs.extend(isYesterday)

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

/**
 * @description the use function is not supported by react-testing-library yet,
 * so we have to mock it and return the value based on the promise
 * @todo remove this mock when react supports it in the stable version
 * @author yonycalsin
 */
jest.mock('react', () => {
  return {
    ...jest.requireActual('react'),
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    use: (promise: any) => {
      if (typeof promise?.then === 'function') {
        return promise.value
      }

      return promise
    },
  }
})

/**
 * @todo fix when import modules from this dependency, for now we are mocking to don't throw the error
 * @author yonycalsin
 */
jest.mock('react-medium-image-zoom', () => ({
  default: () => React.createElement('div'),
}))

/**
 * Override the env object
 */
jest.mock('utils/constants/shared', () => {
  const exports = jest.requireActual('utils/constants/shared')

  const ENV = new Proxy({} as never, {
    get(_, prop: string) {
      const ENV_DATA: Record<string, unknown> = {
        APP_ENV: process.env.APP_ENV || 'development',
        GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
        IS_ENV_DEV: process.env.NODE_ENV === 'development',
        IS_ENV_PROD: process.env.NODE_ENV === 'production',
        REST_API_URL: process.env.REST_API_URL as string,
        REST_API_PUBLIC_KEY: process.env.REST_API_PUBLIC_KEY as string,
        REST_API_MOCKING: process.env.REST_API_MOCKING ? JSON.parse(process.env.REST_API_MOCKING) : null,

        /**
         * Feature Flags
         * this is a list of flags that can be toggled on and off temporarily
         */
        FF_RESUME: process.env.FF_RESUME ? JSON.parse(process.env.FF_RESUME) : false,
        FF_BLOG: process.env.FF_BLOG ? JSON.parse(process.env.FF_BLOG) : false,
        FF_OSS_PROJECTS: process.env.FF_OSS_PROJECTS ? JSON.parse(process.env.FF_OSS_PROJECTS) : false,
        FF_BOOKS: process.env.FF_BOOKS ? JSON.parse(process.env.FF_BOOKS) : false,
        FF_PROJECTS: process.env.FF_PROJECTS ? JSON.parse(process.env.FF_PROJECTS) : false,
        FF_ACHIEVEMENTS: process.env.FF_ACHIEVEMENTS ? JSON.parse(process.env.FF_ACHIEVEMENTS) : false,
        FF_RECOMMENDATIONS: process.env.FF_RECOMMENDATIONS ? JSON.parse(process.env.FF_RECOMMENDATIONS) : false,
        FF_PINNED_PROJECTS: process.env.FF_PINNED_PROJECTS ? JSON.parse(process.env.FF_PINNED_PROJECTS) : false,
        FF_SNIPPETS: process.env.FF_SNIPPETS ? JSON.parse(process.env.FF_SNIPPETS) : false,
        FF_USES: process.env.FF_USES ? JSON.parse(process.env.FF_USES) : false,
        FF_FAQ: process.env.FF_FAQ ? JSON.parse(process.env.FF_FAQ) : false,
        FF_EXERCISES: process.env.FF_EXERCISES ? JSON.parse(process.env.FF_EXERCISES) : false,
      }

      return ENV_DATA[prop]
    },
  })

  return { ...exports, ENV }
})

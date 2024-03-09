/* eslint-disable @typescript-eslint/no-non-null-assertion */
const ENV = {
  APP_ENV: process.env.APP_ENV ?? 'development',
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  IS_ENV_DEV: process.env.NODE_ENV === 'development',
  IS_ENV_PROD: process.env.NODE_ENV === 'production',
  REST_API_URL: process.env.REST_API_URL!,
  REST_API_PUBLIC_KEY: process.env.REST_API_PUBLIC_KEY!,
  REST_API_MOCKING: process.env.REST_API_MOCKING === 'true',

  /**
   * Feature Flags
   * this is a list of flags that can be toggled on and off temporarily
   */
  FF_RESUME: process.env.FF_RESUME === 'true',
  FF_BLOG: process.env.FF_BLOG === 'true',
  FF_OSS_PROJECTS: process.env.FF_OSS_PROJECTS === 'true',
  FF_BOOKS: process.env.FF_BOOKS === 'true',
  FF_PROJECTS: process.env.FF_PROJECTS === 'true',
  FF_ACHIEVEMENTS: process.env.FF_ACHIEVEMENTS === 'true',
  FF_RECOMMENDATIONS: process.env.FF_RECOMMENDATIONS === 'true',
  FF_PINNED_PROJECTS: process.env.FF_PINNED_PROJECTS === 'true',
  FF_SNIPPETS: process.env.FF_SNIPPETS === 'true',
  FF_USES: process.env.FF_USES === 'true',
  FF_FAQ: process.env.FF_FAQ === 'true',
  FF_EXERCISES: process.env.FF_EXERCISES === 'true',
}

const IS_PRODUCTION = ENV.APP_ENV === 'production'

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'

export { ENV, IS_DEVELOPMENT, IS_PRODUCTION }

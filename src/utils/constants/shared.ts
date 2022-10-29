const ENV = {
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

const IS_PRODUCTION = ENV.APP_ENV === 'production'

const IS_DEVELOPMENT = process.env.NODE_ENV !== 'production'

export { ENV, IS_DEVELOPMENT, IS_PRODUCTION }

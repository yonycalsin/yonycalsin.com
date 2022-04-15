const env = {
  APP_ENV: process.env.APP_ENV || 'development',
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  IS_ENV_DEV: process.env.NODE_ENV === 'development',
  IS_ENV_PROD: process.env.NODE_ENV === 'production',
  REST_API_URL: process.env.REST_API_URL,

  /**
   * Feature Flags
   * this is a list of flags that can be toggled on and off temporarily
   */
  FF_RESUME: process.env.FF_RESUME ? JSON.parse(process.env.FF_RESUME) : null,
  FF_BLOG: process.env.FF_BLOG ? JSON.parse(process.env.FF_BLOG) : null,
  FF_OSS_PROJECTS: process.env.FF_OSS_PROJECTS ? JSON.parse(process.env.FF_OSS_PROJECTS) : null,
  FF_BOOKS: process.env.FF_BOOKS ? JSON.parse(process.env.FF_BOOKS) : null,
  FF_PROJECTS: process.env.FF_PROJECTS ? JSON.parse(process.env.FF_PROJECTS) : null,
  FF_ACHIEVEMENTS: process.env.FF_ACHIEVEMENTS ? JSON.parse(process.env.FF_ACHIEVEMENTS) : null,
  FF_RECOMMENDATIONS: process.env.FF_RECOMMENDATIONS ? JSON.parse(process.env.FF_RECOMMENDATIONS) : null,
  FF_PINNED_PROJECTS: process.env.FF_PINNED_PROJECTS ? JSON.parse(process.env.FF_PINNED_PROJECTS) : null,
}

export default env

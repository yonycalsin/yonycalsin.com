const env = {
  APP_ENV: process.env.APP_ENV || 'development',
  GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  IS_ENV_DEV: process.env.NODE_ENV === 'development',
  IS_ENV_PROD: process.env.NODE_ENV === 'production',

  /**
   * Feature Flags
   * this is a list of flags that can be toggled on and off temporarily
   */
  FF_RESUME: process.env.FF_RESUME ? JSON.parse(process.env.FF_RESUME) : null,
  FF_BLOG: process.env.FF_BLOG ? JSON.parse(process.env.FF_BLOG) : null,
}

export default env

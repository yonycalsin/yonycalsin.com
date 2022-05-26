const env = {
  /**
   * Basic Application
   */
  APP_ENV: process.env.APP_ENV ?? 'development', // development, production, test

  /**
   * Webhooks
   */
  REVALIDATE_WEBHOOKS_PUBLIC_KEY: process.env.REVALIDATE_WEBHOOKS_PUBLIC_KEY as string,
}

export default env

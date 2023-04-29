const env = {
  /**
   * Basic Application
   */
  APP_ENV: process.env.APP_ENV ?? 'development', // development, production, test

  /**
   * Webhooks
   */
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  REVALIDATE_WEBHOOKS_PUBLIC_KEY: process.env.REVALIDATE_WEBHOOKS_PUBLIC_KEY!,
}

export default env

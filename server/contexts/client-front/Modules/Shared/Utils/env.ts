const env = {
  /**
   * Basic Application
   */
  APP_ENV: process.env.APP_ENV ?? 'development', // development, production, test

  /**
   * Authentication
   */
  AUTH_JWT_SECRET: Buffer.from(process.env.AUTH_JWT_SECRET as string, 'base64'),

  /**
   * Databases
   */
  BOOKS_NOTION_TOKEN: process.env.BOOKS_NOTION_TOKEN,
}

export default env

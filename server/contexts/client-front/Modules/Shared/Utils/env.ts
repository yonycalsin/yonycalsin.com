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
  NOTION_API_ACCESS_TOKEN: process.env.NOTION_API_ACCESS_TOKEN as string,
  NOTION_BOOKS_DATABASE_ID: process.env.NOTION_BOOKS_DATABASE_ID as string,
  NOTION_ACHIEVEMENTS_DATABASE_ID: process.env.NOTION_ACHIEVEMENTS_DATABASE_ID as string,
}

export default env

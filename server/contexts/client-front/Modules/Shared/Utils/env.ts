const env = {
  /**
   * Basic Application
   */
  APP_ENV: process.env.APP_ENV ?? 'development', // development, production, test

  /**
   * Authentication
   */
  AUTH_JWT_SECRET: Buffer.from(process.env.AUTH_JWT_SECRET as string, 'base64'),
}

export default env

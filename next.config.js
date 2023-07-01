/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    APP_URL: process.env.APP_URL,
    APP_ENV: process.env.APP_ENV,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    REST_API_URL: process.env.REST_API_URL,
    REST_API_PUBLIC_KEY: process.env.REST_API_PUBLIC_KEY,
    REST_API_MOCKING: process.env.REST_API_MOCKING,
    FF_RESUME: process.env.FF_RESUME,
    FF_BLOG: process.env.FF_BLOG,
    FF_OSS_PROJECTS: process.env.FF_OSS_PROJECTS,
    FF_BOOKS: process.env.FF_BOOKS,
    FF_PROJECTS: process.env.FF_PROJECTS,
    FF_ACHIEVEMENTS: process.env.FF_ACHIEVEMENTS,
    FF_RECOMMENDATIONS: process.env.FF_RECOMMENDATIONS,
    FF_PINNED_PROJECTS: process.env.FF_PINNED_PROJECTS,
    FF_SNIPPETS: process.env.FF_SNIPPETS,
    FF_USES: process.env.FF_USES,
    FF_FAQ: process.env.FF_FAQ,
    FF_EXERCISES: process.env.FF_EXERCISES,
  },
  swcMinify: true,
  images: {
    domains: ['avatars.githubusercontent.com'],
  },
  experimental: {
    appDir: true,
    typedRoutes: true,
  },
  modularizeImports: {
    lodash: {
      transform: 'lodash/{{member}}',
    },
  },
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
}

module.exports = nextConfig

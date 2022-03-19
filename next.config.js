const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer()({
  reactStrictMode: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    API_BASE_URL: process.env.API_BASE_URL,
    FF_RESUME: process.env.FF_RESUME,
    FF_BLOG: process.env.FF_BLOG,
    FF_OSS_PROJECTS: process.env.FF_OSS_PROJECTS,
    FF_BOOKS: process.env.FF_BOOKS,
    FF_PROJECTS: process.env.FF_PROJECTS,
    FF_ACHIEVEMENTS: process.env.FF_ACHIEVEMENTS,
    FF_RECOMMENDATIONS: process.env.FF_RECOMMENDATIONS,
    FF_PINNED_PROJECTS: process.env.FF_PINNED_PROJECTS,
  },
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/resume/preview',
        destination: '/resumes/2021-11-22T00-17-12.292Z.pdf',
        has: [
          {
            type: 'cookie',
            key: '_guest-session-token-v1.0.0',
          },
        ],
      },
    ]
  },
})

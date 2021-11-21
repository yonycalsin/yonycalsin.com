const { withContentlayer } = require('next-contentlayer')

/** @type {import('next').NextConfig} */
module.exports = withContentlayer()({
  reactStrictMode: true,
  env: {
    APP_ENV: process.env.APP_ENV,
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    FF_RESUME: process.env.FF_RESUME,
    FF_BLOG: process.env.FF_BLOG,
  },
  swcMinify: true,
})

import ms from 'ms'

export const authorInfo = {
  EMAIL: 'helloyonycalsin@gmail.com',
  RESUME: 'https://resume.yonycalsin.com/',
}

export const socialLinks = {
  GITHUB: 'https://github.com/yonycalsin',
  TWITTER: 'https://twitter.com/yonycalsin',
  LINKEDIN: 'https://www.linkedin.com/in/yonycalsin',
  EMAIL: `mailto:${authorInfo.EMAIL}`,
}

export const dateFormats = {
  // 20 May, 2021
  HUMAN_DATE: 'D MMM, YYYY',
}

export const cookieNames = {
  GUEST_SESSION_TOKEN: '_guest-session-token-v1.0.0',
}

export const timings = {
  REVALIDATE_STATIC_PAGES_TIME: ms('30m') / 1000, // in seconds
}

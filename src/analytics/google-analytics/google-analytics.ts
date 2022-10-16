import { ENV, IS_PRODUCTION } from 'utils/constants'

const googleAnalytics = {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  pageView: (url: string) => {
    if (!IS_PRODUCTION || !ENV.GOOGLE_ANALYTICS_ID) {
      return
    }

    window.gtag('config', ENV.GOOGLE_ANALYTICS_ID, {
      page_path: url,
    })
  },
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  event: (options: { action: string; category: string; label: string; value?: number }) => {
    if (!IS_PRODUCTION) {
      return
    }

    const { action, category, label, value } = options

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  },
}

export default googleAnalytics

import { isProduction } from '~/utils'
import env from '~/utils/env'

const googleAnalytics = {
  // https://developers.google.com/analytics/devguides/collection/gtagjs/pages
  pageView: (url: string) => {
    if (!isProduction) {
      return
    }

    window.gtag('config', env.GOOGLE_ANALYTICS_ID, {
      page_path: url,
    })
  },
  // https://developers.google.com/analytics/devguides/collection/gtagjs/events
  event: (options: { action: string; category: string; label: string; value?: number }) => {
    if (!isProduction) {
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

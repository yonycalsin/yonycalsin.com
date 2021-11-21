import * as React from 'react'
import type { AppProps } from 'next/dist/shared/lib/router/router'
import { DefaultFeature, FeatureProvider } from 'toggled'

import Features from '~/common/features'
import env from '~/utils/env'

import '~/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  const features = React.useMemo(() => {
    const data: DefaultFeature[] = []

    if (env.FF_RESUME) {
      data.push({
        slug: Features.RESUME,
      })
    }
    if (env.FF_BLOG) {
      data.push({
        slug: Features.BLOG,
      })
    }

    return data
  }, [])

  return (
    <FeatureProvider features={features}>
      <Component {...pageProps} />
    </FeatureProvider>
  )
}

export default MyApp

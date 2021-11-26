import * as React from 'react'
import { useRouter } from 'next/dist/client/router'
import type { AppProps } from 'next/dist/shared/lib/router/router'
import NProgress from 'nprogress'
import { DefaultFeature, FeatureProvider } from 'toggled'

import Features from '~/common/features'
import env from '~/utils/env'

import '~/styles/global.css'
import '~/styles/nprogress.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

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

  React.useEffect(() => {
    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)

    router.events.on('routeChangeComplete', handleStop)

    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)

      router.events.off('routeChangeComplete', handleStop)

      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <FeatureProvider features={features}>
      <Component {...pageProps} />
    </FeatureProvider>
  )
}

export default MyApp

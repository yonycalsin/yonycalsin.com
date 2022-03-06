import * as React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { IdProvider } from '@radix-ui/react-id'
import { useRouter } from 'next/dist/client/router'
import type { AppProps } from 'next/dist/shared/lib/router/router'
import NProgress from 'nprogress'
import { DefaultFeature, FeatureProvider } from 'toggled'

import env from '~/utils/env'
import Features from '~/utils/features-flags'

import '~/styles/index.css'
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

    if (env.FF_OSS_PROJECTS) {
      data.push({
        slug: Features.OSS_PROJECTS,
      })
    }

    if (env.FF_BOOKS) {
      data.push({
        slug: Features.BOOKS,
      })
    }

    if (env.FF_PROJECTS) {
      data.push({
        slug: Features.PROJECTS,
      })
    }

    if (env.FF_ACHIEVEMENTS) {
      data.push({
        slug: Features.ACHIEVEMENTS,
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

  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <IdProvider>
          <FeatureProvider features={features}>
            <Component {...pageProps} />
          </FeatureProvider>
        </IdProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp

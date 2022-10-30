import 'assets/styles/index.css'
import 'assets/styles/runts.css'
import 'assets/styles/tailwind.css'
import 'prism-theme-vars/base.css'
import 'prism-theme-vars/themes/vitesse-dark.css'
import '@runts/react/styles/editor-fonts.css'
import '@runts/react/styles/runts-playground.css'

import * as React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'

import type { MyAppPageProps } from 'typings/pages'
import { analytics } from 'analytics'
import { NightModeButton } from 'components'
import { ENV, IS_PRODUCTION, NUMERICS } from 'utils/constants'

if (ENV.REST_API_MOCKING) {
  import('mock-server').then(result => {
    result.initMocks()
  })
}

function MyApp(props: MyAppPageProps) {
  const { Component, pageProps } = props

  const router = useRouter()

  React.useEffect(() => {
    const handleRouteStart = () => {
      NProgress.start()
    }

    const handleRouteStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleRouteStart)

    router.events.on('routeChangeComplete', handleRouteStop)

    router.events.on('routeChangeError', handleRouteStop)

    return () => {
      router.events.off('routeChangeStart', handleRouteStart)

      router.events.off('routeChangeComplete', handleRouteStop)

      router.events.off('routeChangeError', handleRouteStop)
    }
  }, [router])

  React.useEffect(() => {
    const handleRouteChange = (url: string) => {
      analytics.pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    router.events.on('hashChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)

      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: NUMERICS.RETRY_QUERY,
          },
        },
      }),
  )

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {IS_PRODUCTION && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${ENV.GOOGLE_ANALYTICS_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];

                        function gtag(){dataLayer.push(arguments);}

                        gtag('js', new Date());

                        gtag('config', '${ENV.GOOGLE_ANALYTICS_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,
              }}
            />
          </>
        )}
        <NightModeButton />
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp

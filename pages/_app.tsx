import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import { DefaultFeature, FeatureProvider } from 'toggled'

import { analytics } from '~/analytics/google-analytics'
import { CommandBar } from '~/components/command-bar'
import { NightModeButton } from '~/components/night-mode-button'
import { mainTheme } from '~/themes/main'
import type { MyAppPageProps } from '~/typings/pages/app'
import env from '~/utils/constants/env'
import Features from '~/utils/constants/features-flags'
import isProduction from '~/utils/constants/is-production'
import { NUMERICS } from '~/utils/constants/numerics'

import '~/assets/styles/index.css'
import 'prism-theme-night-owl/build/style.css'

if (env.REST_API_MOCKING) {
  import('~/mock-server').then(result => {
    result.initMocks()
  })
}

function MyApp(props: MyAppPageProps) {
  const { Component, pageProps } = props

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

    if (env.FF_RECOMMENDATIONS) {
      data.push({
        slug: Features.RECOMMENDATIONS,
      })
    }

    if (env.FF_PINNED_PROJECTS) {
      data.push({
        slug: Features.PINNED_PROJECTS,
      })
    }

    if (env.FF_SNIPPETS) {
      data.push({
        slug: Features.SNIPPETS,
      })
    }

    if (env.FF_USES) {
      data.push({
        slug: Features.USES,
      })
    }

    if (env.FF_FAQ) {
      data.push({
        slug: Features.FAQ,
      })
    }

    return data
  }, [])

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
        <FeatureProvider features={features}>
          <ChakraProvider resetCSS theme={mainTheme}>
            <NightModeButton />
            {isProduction && (
              <>
                <Script
                  strategy="afterInteractive"
                  src={`https://www.googletagmanager.com/gtag/js?id=${env.GOOGLE_ANALYTICS_ID}`}
                />
                <Script
                  id="gtag-init"
                  strategy="afterInteractive"
                  dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];

                        function gtag(){dataLayer.push(arguments);}

                        gtag('js', new Date());

                        gtag('config', '${env.GOOGLE_ANALYTICS_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,
                  }}
                />
              </>
            )}
            <CommandBar>
              <Component {...pageProps} />
            </CommandBar>
          </ChakraProvider>
        </FeatureProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp

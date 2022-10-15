import 'prism-theme-vars/base.css'
import 'assets/styles/index.css'
import 'prism-theme-vars/themes/vitesse-dark.css'

import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useRouter } from 'next/router'
import Script from 'next/script'
import NProgress from 'nprogress'
import { DefaultFeature, FeatureProvider } from 'toggled'

import type { MyAppPageProps } from 'typings/pages'
import { analytics } from 'analytics'
import { ThemeMain } from 'themes'
import { CommandBar, NightModeButton } from 'components'
import { ENV, Features, IS_PRODUCTION, NUMERICS } from 'utils/constants'

if (ENV.REST_API_MOCKING) {
  import('mock-server').then(result => {
    result.initMocks()
  })
}

function MyApp(props: MyAppPageProps) {
  const { Component, pageProps } = props

  const router = useRouter()

  const features = React.useMemo(() => {
    const data: DefaultFeature[] = []

    if (ENV.FF_RESUME) {
      data.push({
        slug: Features.RESUME,
      })
    }
    if (ENV.FF_BLOG) {
      data.push({
        slug: Features.BLOG,
      })
    }

    if (ENV.FF_OSS_PROJECTS) {
      data.push({
        slug: Features.OSS_PROJECTS,
      })
    }

    if (ENV.FF_BOOKS) {
      data.push({
        slug: Features.BOOKS,
      })
    }

    if (ENV.FF_PROJECTS) {
      data.push({
        slug: Features.PROJECTS,
      })
    }

    if (ENV.FF_ACHIEVEMENTS) {
      data.push({
        slug: Features.ACHIEVEMENTS,
      })
    }

    if (ENV.FF_RECOMMENDATIONS) {
      data.push({
        slug: Features.RECOMMENDATIONS,
      })
    }

    if (ENV.FF_PINNED_PROJECTS) {
      data.push({
        slug: Features.PINNED_PROJECTS,
      })
    }

    if (ENV.FF_SNIPPETS) {
      data.push({
        slug: Features.SNIPPETS,
      })
    }

    if (ENV.FF_USES) {
      data.push({
        slug: Features.USES,
      })
    }

    if (ENV.FF_FAQ) {
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
          <ChakraProvider resetCSS theme={ThemeMain}>
            <NightModeButton />
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

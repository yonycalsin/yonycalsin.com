import * as React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import { DefaultFeature, FeatureProvider } from 'toggled'

import { createQueryFn } from '~/clients/query-client'
import { NightModeButton } from '~/components/night-mode-button'
import { mainTheme } from '~/themes/main'
import env from '~/utils/env'
import Features from '~/utils/features-flags'

import '~/assets/styles/index.css'

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

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: createQueryFn(),
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
            <Component {...pageProps} />
          </ChakraProvider>
        </FeatureProvider>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp

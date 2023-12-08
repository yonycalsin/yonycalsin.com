import * as React from 'react'
import { QueryClient, type QueryClientConfig, QueryClientProvider } from '@tanstack/react-query'
import { render } from '@testing-library/react'

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
      cacheTime: Infinity,
    },
  },
  logger: {
    //   eslint-disable-next-line @typescript-eslint/no-empty-function
    error: () => {},
    //   eslint-disable-next-line no-console
    log: console.log,
    // eslint-disable-next-line no-console
    warn: console.warn,
  },
}

/**
 * @deprecated
 */
function setupWithReactQuery(children: React.ReactNode) {
  const queryClient = new QueryClient(queryClientConfig)

  const utils = render(<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)

  return utils
}

/**
 * @deprecated
 */
function ReactQueryWrapper(props: React.PropsWithChildren) {
  const { children } = props

  const queryClient = new QueryClient(queryClientConfig)

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { ReactQueryWrapper, setupWithReactQuery }

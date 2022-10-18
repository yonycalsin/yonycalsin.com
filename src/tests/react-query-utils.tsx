import * as React from 'react'
import { type QueryClientConfig, QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
    warn: console.warn,
  },
}

function setupWithReactQuery(children: React.ReactNode) {
  const queryClient = new QueryClient(queryClientConfig)

  const utils = render(<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>)

  return utils
}

function ReactQueryWrapper(props: React.PropsWithChildren<unknown>) {
  const { children } = props

  const queryClient = new QueryClient(queryClientConfig)

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

export { ReactQueryWrapper, setupWithReactQuery }

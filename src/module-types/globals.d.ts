import type { DehydratedState } from 'react-query'
import type { NextComponentType, NextPageContext } from 'next'
import type { AppProps as NextAppProps } from 'next/app'

declare global {
  interface PaginationMeta {
    pages: number
    page: number
    total: number
    hasNextPage: boolean
    hasPrevPage: boolean
  }

  interface AppProps extends NextAppProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Component: NextComponentType<NextPageContext, any, any>
    pageProps: {
      dehydratedState: DehydratedState
    }
  }

  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: any
  }
}

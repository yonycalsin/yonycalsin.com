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
    Component: NextComponentType<NextPageContext, any, any>
    pageProps: {
      dehydratedState: DehydratedState
    }
  }
}

import type { DehydratedState } from '@tanstack/react-query'
import type { NextComponentType, NextPageContext } from 'next'
import type { AppProps as NextAppProps } from 'next/app'

interface PageProps {
  dehydratedState: DehydratedState
}

export interface MyAppPageProps extends Omit<NextAppProps, 'Component'> {
  Component: NextComponentType<NextPageContext, unknown, PageProps>
  pageProps: PageProps
}

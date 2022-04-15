import type { ReactNode } from 'react'

/**
 * QueryClientProvider  type issue after upgrading to React 18
 * https://github.com/tannerlinsley/react-query/issues/3476#issuecomment-1092424508
 */
declare module 'react-query/types/react/QueryClientProvider' {
  interface QueryClientProviderProps {
    children?: ReactNode
  }
}

/**
 * Hydrate type issue after upgrading to React 18
 * https://github.com/tannerlinsley/react-query/issues/3476#issuecomment-1092424508
 */
declare module 'react-query/types/react/Hydrate' {
  interface HydrateProps {
    children?: ReactNode
  }
}

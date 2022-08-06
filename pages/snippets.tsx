import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { createQueryFn } from '~/clients/query-client'
import { Meta } from '~/components/meta'
import { QUERY_KEY_SNIPPETS } from '~/constants/query-keys'
import { SnippetsScreen } from '~/screens/snippets'
import { timings } from '~/utils/constants'

interface SnippetsPageProps {
  dehydratedState: DehydratedState
}

function SnippetsPage() {
  return (
    <>
      <Meta title="Snippets" />
      <SnippetsScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<SnippetsPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  await queryClient.prefetchQuery(QUERY_KEY_SNIPPETS, {
    staleTime: Infinity,
  })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default SnippetsPage

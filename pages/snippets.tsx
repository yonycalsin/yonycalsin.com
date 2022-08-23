import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { SnippetsScreen } from '~/screens/snippets'
import { getAllSnippets } from '~/services/snippet/snippets'
import { snippetApiEndpoints } from '~/services/snippet/utils/snippet-api-endpoints'
import type { SnippetsPageProps } from '~/typings/pages/snippets'
import type { ServerListResponse } from '~/typings/services'
import type { SnippetResponsePayload } from '~/typings/services/snippet/snippets'
import { timings } from '~/utils/constants'

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
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  await queryClient.prefetchQuery<ServerListResponse<SnippetResponsePayload>>(
    [snippetApiEndpoints.ALL_SNIPPETS],
    () => getAllSnippets(),
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default SnippetsPage

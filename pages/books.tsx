import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'
import type { GetStaticPropsResult } from 'next'

import { createQueryFn } from '~/clients/query-client'
import { Meta } from '~/components/meta'
import type { BookQueryWithMeta } from '~/module-types/api-rest/books'
import { BooksScreen } from '~/screens/books'
import { timings } from '~/utils/constants'

interface BooksPageProps {
  dehydratedState: DehydratedState
}

function BooksPage() {
  return (
    <>
      <Meta title="Libros" />
      <BooksScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<BooksPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  await queryClient.prefetchQuery<BookQueryWithMeta>('/books', { staleTime: Infinity })

  await queryClient.prefetchQuery<BookQueryWithMeta>(['/books', { status: 'Reading' }], { staleTime: Infinity })

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BooksPage

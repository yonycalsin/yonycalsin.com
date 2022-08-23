import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import type { GetStaticPropsResult } from 'next'

import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { BooksScreen } from '~/screens/books'
import { getAllBooks, getReadingBooks } from '~/services/book/books'
import { bookApiEndpoints } from '~/services/book/utils/book-api-endpoints'
import type { BooksPageProps } from '~/typings/pages/books'
import type { ServerListResponse } from '~/typings/services'
import type { BookResponsePayload } from '~/typings/services/book/books'
import { timings } from '~/utils/constants'

function BooksPage() {
  return (
    <>
      <Meta title="Books" />
      <BooksScreen />
    </>
  )
}

export async function getStaticProps(): Promise<GetStaticPropsResult<BooksPageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  await queryClient.prefetchQuery<ServerListResponse<BookResponsePayload>>(
    [bookApiEndpoints.ALL_BOOKS],
    () => getAllBooks(),
    { staleTime: Infinity },
  )

  await queryClient.prefetchQuery<ServerListResponse<BookResponsePayload>>(
    [bookApiEndpoints.READING_BOOKS],
    () => getReadingBooks(),
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BooksPage

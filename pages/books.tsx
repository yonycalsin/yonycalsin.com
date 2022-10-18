import type { GetStaticPropsResult } from 'next'
import * as React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'

import type { BooksPageProps } from 'typings/pages'
import type { BookResponsePayload, ServerListResponse } from 'typings/services'
import { getAllBooksApi, getReadingBooksApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import BooksScreen from 'screens/books'
import { Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

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
    [API_ENDPOINTS.ALL_BOOKS],
    () => getAllBooksApi(),
    { staleTime: Infinity },
  )

  await queryClient.prefetchQuery<ServerListResponse<BookResponsePayload>>(
    [API_ENDPOINTS.READING_BOOKS],
    () => getReadingBooksApi(),
    { staleTime: Infinity },
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default BooksPage

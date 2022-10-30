import * as React from 'react'
import { useQuery } from '@tanstack/react-query'

import type { BookResponsePayload, ServerListResponse } from 'typings/services'
import { getAllBooksApi, getReadingBooksApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'
import { Heading, LoaderBox } from 'components'
import { BookItem } from './components'

function BooksScreen() {
  const allBooksResponse = useQuery<ServerListResponse<BookResponsePayload>>(
    [API_ENDPOINTS.ALL_BOOKS],
    () => getAllBooksApi(),
    { staleTime: Infinity },
  )

  const readingBooksResponse = useQuery<ServerListResponse<BookResponsePayload>>(
    [API_ENDPOINTS.READING_BOOKS],
    () => getReadingBooksApi(),
    { staleTime: Infinity },
  )

  const isLoading = allBooksResponse.isLoading || readingBooksResponse.isLoading

  if (isLoading) {
    return <LoaderBox />
  }

  return (
    <MainLayout>
      <main className="container space-y-6 py-10">
        <header className="space-y-3">
          <Heading size="h1">Books ({allBooksResponse.data?.data.length})</Heading>
          <p>This page contains the books I have read along of my life.</p>
        </header>
        <div className="space-y-3">
          <Heading size="h3">Reading:</Heading>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="List of reading books">
            {readingBooksResponse.data?.data.map((book: BookResponsePayload) => (
              <BookItem
                key={book.id}
                name={book.name}
                imageSrc={book.images[0].url}
                author={book.author}
                rating={book.rating}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Heading size="h3">All:</Heading>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6" role="list" aria-label="List of all books">
            {allBooksResponse.data?.data.map((book: BookResponsePayload) => (
              <BookItem
                key={book.id}
                name={book.name}
                imageSrc={book.images[0].url}
                author={book.author}
                rating={book.rating}
              />
            ))}
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default BooksScreen

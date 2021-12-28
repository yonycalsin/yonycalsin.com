import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient, useQuery } from 'react-query'
import type { GetStaticPropsContext, GetStaticPropsResult } from 'next'

import { createQueryFn } from '~/clients/query-client'
import { BookItem } from '~/components/books/book-item'
import { Meta } from '~/components/meta'
import { MainLayout } from '~/layouts'
import type { Book, BookQueryWithMeta } from '~/module-types/api-rest/books'

interface BooksPageProps {
  dehydratedState: DehydratedState
}

function BooksPage() {
  const allBooksResponse = useQuery<BookQueryWithMeta>('/books', {
    staleTime: Infinity,
  })

  const readingBooksResponse = useQuery<BookQueryWithMeta>(['/books', { status: 'Reading' }], { staleTime: Infinity })

  return (
    <MainLayout>
      <Meta title="Libros" />
      <article className="article">
        <header>
          <h1>Libros</h1>
          <p>Esta página contiene los libros que me gustan con mis notas, resaltados y reseñas.</p>
        </header>

        <h3>Actualmente leyendo</h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 mb-2">
          {readingBooksResponse.data?.data.map((book: Book) => (
            <BookItem
              key={book.id}
              name={book.name}
              imageSrc={book.images[0].url}
              author={book.author}
              rating={book.rating}
            />
          ))}
        </div>

        <h3>Todos los libros</h3>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 mb-2">
          {allBooksResponse.data?.data.map((book: Book) => (
            <BookItem
              key={book.id}
              name={book.name}
              imageSrc={book.images[0].url}
              author={book.author}
              rating={book.rating}
            />
          ))}
        </div>
      </article>
    </MainLayout>
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
    revalidate: 10,
  }
}

export default BooksPage

import * as React from 'react'
import { Container } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { BookItem } from '~/components/books/book-item'
import { Typography } from '~/components/typography/typography'
import { MainLayout } from '~/layouts'
import type { Book, BookQueryWithMeta } from '~/module-types/api-rest/books'

export function BooksScreen() {
  const allBooksResponse = useQuery<BookQueryWithMeta>(['/books'], {
    staleTime: Infinity,
  })

  const readingBooksResponse = useQuery<BookQueryWithMeta>(['/books', { status: 'Reading' }], { staleTime: Infinity })

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <article className="py-4">
          <header>
            <Typography variant="h2" gutterBottom fontWeight="extrabold">
              Libros
            </Typography>
            <Typography gutterBottom>
              Esta página contiene los libros que me gustan con mis notas, resaltados y reseñas.
            </Typography>
          </header>

          <Typography variant="h4" gutterBottom>
            Actualmente leyendo
          </Typography>

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

          <Typography variant="h4" gutterBottom>
            Todos los libros
          </Typography>

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
      </Container>
    </MainLayout>
  )
}

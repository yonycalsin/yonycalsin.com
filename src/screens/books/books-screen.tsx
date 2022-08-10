import * as React from 'react'
import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { BookItem } from '~/components/books/book-item'
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
        <VStack alignItems="flex-start" spacing="6">
          <header>
            <Heading>Books</Heading>
            <Text mt="3">This page contains the books I have been.</Text>
          </header>

          <div>
            <Heading
              size={{
                base: 'md',
                lg: 'lg',
              }}
            >
              Reading:
            </Heading>
            <SimpleGrid
              mt="3"
              columns={{
                base: 2,
                lg: 3,
              }}
              spacing="6"
            >
              {readingBooksResponse.data?.data.map((book: Book) => (
                <BookItem
                  key={book.id}
                  name={book.name}
                  imageSrc={book.images[0].url}
                  author={book.author}
                  rating={book.rating}
                />
              ))}
            </SimpleGrid>
          </div>

          <div>
            <Heading
              size={{
                base: 'md',
                lg: 'lg',
              }}
            >
              All:
            </Heading>
            <SimpleGrid
              mt="3"
              columns={{
                base: 2,
                lg: 3,
              }}
              spacing="6"
            >
              {allBooksResponse.data?.data.map((book: Book) => (
                <BookItem
                  key={book.id}
                  name={book.name}
                  imageSrc={book.images[0].url}
                  author={book.author}
                  rating={book.rating}
                />
              ))}
            </SimpleGrid>
          </div>
        </VStack>
      </Container>
    </MainLayout>
  )
}

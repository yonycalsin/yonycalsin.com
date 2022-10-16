import * as React from 'react'
import { Container, Heading, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import type { BookResponsePayload, ServerListResponse } from 'typings/services'
import { getAllBooks, getReadingBooks } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'
import { BookItem } from './components'

function BooksScreen() {
  const allBooksResponse = useQuery<ServerListResponse<BookResponsePayload>>(
    [API_ENDPOINTS.ALL_BOOKS],
    () => getAllBooks(),
    { staleTime: Infinity },
  )

  const readingBooksResponse = useQuery<ServerListResponse<BookResponsePayload>>(
    [API_ENDPOINTS.READING_BOOKS],
    () => getReadingBooks(),
    { staleTime: Infinity },
  )

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack alignItems="flex-start" spacing="6">
          <header>
            <Heading>Books</Heading>
            <Text mt="3">This page contains the books I have read along of my life.</Text>
          </header>
          <div>
            <Heading size="md">Reading:</Heading>
            <SimpleGrid
              mt="3"
              columns={{
                base: 2,
                lg: 3,
              }}
              spacing="6"
            >
              {readingBooksResponse.data?.data.map((book: BookResponsePayload) => (
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
            <Heading size="md">All:</Heading>
            <SimpleGrid
              mt="3"
              columns={{
                base: 2,
                lg: 3,
              }}
              spacing="6"
            >
              {allBooksResponse.data?.data.map((book: BookResponsePayload) => (
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

export default BooksScreen

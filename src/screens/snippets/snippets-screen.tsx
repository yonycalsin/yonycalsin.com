import * as React from 'react'
import { useQuery } from 'react-query'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'

import { QUERY_KEY_SNIPPETS } from '~/constants/query-keys'
import { MainLayout } from '~/layouts'
import type { ISnippetQueryWithMeta } from '~/module-types/api-rest/snippets'

import { SnippetCard } from './components/snippet-card'

export function SnippetsScreen() {
  const queryResult = useQuery<ISnippetQueryWithMeta>(QUERY_KEY_SNIPPETS, {
    staleTime: Infinity,
  })

  const snippetsData = queryResult.data?.data ?? []

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack spacing="6" mb="6">
          <Heading>Snippets ({snippetsData.length})</Heading>
          <Text>
            These are a collection of code snippets I&rsquo;ve used in the past and saved. Some are Serverless
            Functions, which include set up instructions. Others are anything from random CSS snippets to Node.js
            scripts.
          </Text>
        </VStack>
        <VStack spacing="6">
          {snippetsData.map(snippetData => (
            <SnippetCard key={snippetData.slug} snippetData={snippetData} />
          ))}
        </VStack>
      </Container>
    </MainLayout>
  )
}

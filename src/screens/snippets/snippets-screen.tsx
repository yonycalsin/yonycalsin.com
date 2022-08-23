import * as React from 'react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { MainLayout } from '~/layouts'
import { getAllSnippets } from '~/services/snippet/snippets'
import { snippetApiEndpoints } from '~/services/snippet/utils/snippet-api-endpoints'
import type { ServerListResponse } from '~/typings/services'
import type { SnippetResponsePayload } from '~/typings/services/snippet/snippets'

import { SnippetCard } from './components/snippet-card'

export function SnippetsScreen() {
  const queryResult = useQuery<ServerListResponse<SnippetResponsePayload>>(
    [snippetApiEndpoints.ALL_SNIPPETS],
    () => getAllSnippets(),
    { staleTime: Infinity },
  )

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

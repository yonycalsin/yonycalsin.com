import * as React from 'react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'

import { MainLayout } from '~/layouts'

import { SnippetCard } from './components/snippet-card'

export function SnippetsScreen() {
  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack spacing="6" mb="6">
          <Heading>Snippets (30)</Heading>
          <Text>
            These are a collection of code snippets I&rsquo;ve used in the past and saved. Some are Serverless
            Functions, which include set up instructions. Others are anything from random CSS snippets to Node.js
            scripts.
          </Text>
        </VStack>
        <VStack spacing="6">
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
          <SnippetCard />
        </VStack>
      </Container>
    </MainLayout>
  )
}

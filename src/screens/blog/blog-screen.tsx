import * as React from 'react'
import { Box, Container, Divider, Heading, Link, Text, VStack } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { MainLayout } from '~/layouts'
import { getPostsApi } from '~/services/blog/posts'
import { blogApiEndpoints } from '~/services/blog/utils/blog-api-endpoints'

export function BlogScreen() {
  const getPostsResponse = useQuery([blogApiEndpoints.POSTS], getPostsApi, {
    staleTime: Infinity,
  })

  const posts = getPostsResponse.data?.data ?? []

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack spacing="6" mb="6">
          <Heading>Posts ({posts.length})</Heading>
          <Text>
            Tutoriales, artículos técnicos, fragmentos, materiales de referencia y todos los recursos relacionados con
            el desarrollo que he escrito.
          </Text>
        </VStack>

        <Divider />

        <VStack mt="2" alignItems="flex-start">
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Box>{post.title}</Box>
            </Link>
          ))}
        </VStack>
      </Container>
    </MainLayout>
  )
}

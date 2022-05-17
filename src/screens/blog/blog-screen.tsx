import * as React from 'react'
import { Container, Divider, Heading, Text, VStack } from '@chakra-ui/react'

import BlogPostList from '~/components/blog-post-list/blog-post-list'
import { MainLayout } from '~/layouts'
import type { Blog } from '~/lib/contentlayer-data/blog'

export interface BlogScreenProps {
  posts: Blog[]
}

export function BlogScreen(props: BlogScreenProps) {
  const { posts } = props

  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack spacing="6" mb="6">
          <Heading>Blog</Heading>
          <Text>
            Tutoriales, artículos técnicos, fragmentos, materiales de referencia y todos los recursos relacionados con
            el desarrollo que he escrito.
          </Text>
        </VStack>

        <Divider />

        <VStack mt="2" alignItems="flex-start">
          <BlogPostList posts={posts} />
        </VStack>
      </Container>
    </MainLayout>
  )
}

import * as React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  ListItem,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import RouterLink from 'next/link'
import { BsChevronCompactRight } from 'react-icons/bs'

import { getPostsApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'

function BlogScreen() {
  const getPostsResponse = useQuery([API_ENDPOINTS.POSTS], () => getPostsApi(), {
    staleTime: Infinity,
  })

  const posts = getPostsResponse.data?.data ?? []

  return (
    <MainLayout>
      <Container maxW="container.md" py="6" pb="12">
        <VStack
          as="header"
          alignItems="flex-start"
          spacing={{
            base: '2',
            md: '5',
          }}
        >
          <Breadcrumb spacing="8px" separator={<BsChevronCompactRight color="gray.500" />}>
            <BreadcrumbItem>
              <RouterLink href="/" passHref>
                <BreadcrumbLink>Home</BreadcrumbLink>
              </RouterLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Posts ({posts.length})</Heading>
          <Text>
            Tutorials, tricks, personal articles, technical articles, fragments, reference resources and all resources
            related to the software development.
          </Text>
        </VStack>
        <VStack mt="6" alignItems="flex-start">
          <UnorderedList>
            {posts.map(post => (
              <RouterLink href={`/blog/${post.slug}`} key={post.slug} passHref>
                <Link>
                  <ListItem>{post.title}</ListItem>
                </Link>
              </RouterLink>
            ))}
          </UnorderedList>
        </VStack>
      </Container>
    </MainLayout>
  )
}

export default BlogScreen

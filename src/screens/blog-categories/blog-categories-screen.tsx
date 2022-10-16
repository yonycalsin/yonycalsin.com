import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Heading,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import RouterLink from 'next/link'
import { BsChevronCompactRight } from 'react-icons/bs'

import type { CategoryResponsePayload, ServerListResponse } from 'typings/services'
import { getCategoriesApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { MainLayout } from 'layouts'

function BlogCategoriesScreen() {
  const categoriesResponse = useQuery<ServerListResponse<CategoryResponsePayload>>(
    [API_ENDPOINTS.CATEGORIES],
    getCategoriesApi,
    { staleTime: Infinity },
  )

  const categories = categoriesResponse.data?.data ?? []

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
            <BreadcrumbItem>
              <RouterLink href="/blog" passHref>
                <BreadcrumbLink href="/blog">Blog</BreadcrumbLink>
              </RouterLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="/blog/categories">Categories</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Blog Categories ({categories.length})</Heading>
          <Text>This page contains all the categories.</Text>
        </VStack>
        <Box display="flex" mt="6">
          {categories.map(category => (
            <RouterLink href={`/blog/categories/${category.slug}`} key={category.title} passHref>
              <Link border="1px" py="2" px="4" borderRadius="md" color="primary">
                {category.title}
              </Link>
            </RouterLink>
          ))}
        </Box>
      </Container>
    </MainLayout>
  )
}

export default BlogCategoriesScreen

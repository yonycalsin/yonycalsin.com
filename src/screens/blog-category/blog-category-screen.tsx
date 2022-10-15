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
import dayjs from 'dayjs'
import RouterLink from 'next/link'
import nextBase64 from 'next-base64'
import { BsChevronCompactRight } from 'react-icons/bs'

import type { BlogCategoryScreenProps } from 'typings/screens'
import { useMDXComponent } from 'hooks'
import { MainLayout } from 'layouts'
import { MDXComponents } from 'components'
import { DATE_FORMATS } from 'utils/constants'

function BlogCategoryScreen(props: BlogCategoryScreenProps) {
  const { category, posts } = props

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(category.body.code))))

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
            <BreadcrumbItem>
              <RouterLink href="/blog/categories" passHref>
                <BreadcrumbLink href="/blog/categories">Categories</BreadcrumbLink>
              </RouterLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>{category.title}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>Category: {category.title}</Heading>
          <Text textColor="gray" fontStyle="italic">
            Last updated at {dayjs(category.updatedAt).format(DATE_FORMATS.HUMAN_DATE)}
          </Text>
        </VStack>
        <Component components={MDXComponents} />
        <UnorderedList mt="6">
          {posts.map(post => (
            <RouterLink href={`/blog/${post.slug}`} key={post.title} passHref>
              <Link>
                <ListItem>{post.title}</ListItem>
              </Link>
            </RouterLink>
          ))}
        </UnorderedList>
      </Container>
    </MainLayout>
  )
}

export default BlogCategoryScreen

import * as React from 'react'
import { BsChevronCompactRight } from 'react-icons/bs'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Container, Heading, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import RouterLink from 'next/link'
import nextBase64 from 'next-base64'

import MDXComponents from '~/components/mdx-components'
import { useMDXComponent } from '~/hooks/useMDXComponent'
import { MainLayout } from '~/layouts'
import type { PostResponsePayload } from '~/typings/services'
import { dateFormats } from '~/utils/constants/constants'

export interface BlogPostScreenProps {
  post: PostResponsePayload
}

export function BlogPostScreen(props: BlogPostScreenProps) {
  const { post } = props

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(post.body.code))))

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
              <RouterLink href="/blog" passHref>
                <BreadcrumbLink>Blog</BreadcrumbLink>
              </RouterLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading>{post.title}</Heading>
          <Text textColor="gray" fontStyle="italic">
            Last updated at {dayjs(post.updatedAt).format(dateFormats.HUMAN_DATE)}
          </Text>
        </VStack>
        <Component components={MDXComponents} />
      </Container>
    </MainLayout>
  )
}

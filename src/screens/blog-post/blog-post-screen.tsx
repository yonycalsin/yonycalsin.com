import * as React from 'react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useMDXComponent } from 'next-contentlayer/hooks'

import MDXComponents from '~/components/mdx-components'
import { MainLayout } from '~/layouts'
import { dateFormats } from '~/utils/constants'

import type { Blog } from '.contentlayer/generated/types'

export interface BlogPostScreenProps {
  post: Blog
}

export function BlogPostScreen(props: BlogPostScreenProps) {
  const { post } = props

  const Component = useMDXComponent(post.body.code)

  return (
    <MainLayout>
      <Container maxW="container.md" py="6">
        <VStack as="header" alignItems="flex-start">
          <Heading>{post.title}</Heading>
          <Text textColor="gray">{dayjs(post.publishedAt).format(dateFormats.HUMAN_DATE)}</Text>
        </VStack>

        <Component components={MDXComponents} />
      </Container>
    </MainLayout>
  )
}

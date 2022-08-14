import * as React from 'react'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import nextBase64 from 'next-base64'

import MDXComponents from '~/components/mdx-components'
import { useMDXComponent } from '~/hooks/useMDXComponent'
import { MainLayout } from '~/layouts'
import type { PostResponsePayload } from '~/typings/services'
import { dateFormats } from '~/utils/constants'

export interface BlogPostScreenProps {
  post: PostResponsePayload
}

export function BlogPostScreen(props: BlogPostScreenProps) {
  const { post } = props

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(post.body.code))))

  return (
    <MainLayout>
      <Container maxW="container.md" py="6" pb="12">
        <VStack as="header" alignItems="flex-start">
          <Heading>{post.title}</Heading>
          <Text textColor="gray">{dayjs(post.createdAt).format(dateFormats.HUMAN_DATE)}</Text>
        </VStack>

        <Component components={MDXComponents} />
      </Container>
    </MainLayout>
  )
}

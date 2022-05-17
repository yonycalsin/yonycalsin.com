import { Badge, Flex, Grid, Link, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import RouterLink from 'next/link'

import type { Blog } from '~/lib/contentlayer-data/blog'
import { dateFormats } from '~/utils/constants'

export interface BlogPostListProps {
  posts: Blog[]
}

function BlogPostList(props: BlogPostListProps) {
  const { posts } = props

  const backgroundColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <>
      {posts.map(post => (
        <RouterLink href={`/blog/${post.slug}`} key={post._id} passHref>
          <Link
            p="3"
            w="full"
            _hover={{
              backgroundColor: backgroundColor,
            }}
          >
            <Grid
              gridTemplateColumns={{
                base: '1fr',
                md: 'var(--yony-space-40) 1fr',
              }}
            >
              <div>
                <Text
                  fontSize={{
                    base: 'xs',
                    md: 'md',
                  }}
                  textColor="gray"
                  fontStyle="italic"
                >
                  {dayjs(post.publishedAt).format(dateFormats.HUMAN_DATE)}
                </Text>
              </div>
              <VStack alignItems="flex-start">
                <Text fontSize="lg" fontWeight="bold">
                  {post.title}
                </Text>

                <Text>{post.summary}</Text>

                <Flex flexDirection="row" gap="2" flexWrap="wrap">
                  <Badge colorScheme="secondary"># 1 Tag</Badge>
                  <Badge colorScheme="secondary"># 2 Tag</Badge>
                  <Badge colorScheme="secondary"># 3 Tag</Badge>
                  <Badge colorScheme="secondary"># 4 Tag</Badge>
                  <Badge colorScheme="secondary"># 5 Tag</Badge>
                </Flex>
              </VStack>
            </Grid>
          </Link>
        </RouterLink>
      ))}
    </>
  )
}

export default BlogPostList

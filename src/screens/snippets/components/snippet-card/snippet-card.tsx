import * as React from 'react'
import { Badge, Box, Text, useColorModeValue } from '@chakra-ui/react'
import nextBase64 from 'next-base64'

import MDXComponents from '~/components/mdx-components'
import { useMDXComponent } from '~/hooks/useMDXComponent'
import type { SnippetResponsePayload } from '~/typings/services/snippet/snippets'
import { getRandomBadgeColors } from '~/utils/get-random-colors'

export interface SnippetCardProps {
  snippetData: SnippetResponsePayload
}

export function SnippetCard(props: SnippetCardProps) {
  const { snippetData: snippet } = props

  const containerBackgroundColor = useColorModeValue('primary.100', 'gray.900')

  const codeContainerBackgroundColor = useColorModeValue('gray.200', 'gray.700')

  const Component = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(snippet.body.mdxCode))))

  return (
    <Box backgroundColor={containerBackgroundColor} borderRadius="md" w="full">
      <Box px="6" py="4">
        <Text fontWeight="bold">{snippet.title}</Text>
      </Box>
      <Box backgroundColor={codeContainerBackgroundColor} px="6" py="4">
        <Component components={MDXComponents} />
      </Box>
      <Box px="6" py="4" display="flex" alignItems="center" justifyContent="space-between" gap="6">
        <Box display="flex" flexWrap="wrap" gap="3">
          {snippet.tags.map(tag => (
            <Badge key={tag} colorScheme={getRandomBadgeColors()}>
              {tag}
            </Badge>
          ))}
        </Box>
        <div>
          <Text fontSize="xs" textColor="gray" fontStyle="italic">
            Last Updated at{' '}
            {/* https://bobbyhadz.com/blog/javascript-convert-iso-string-to-date-object#convert-an-iso-string-to-a-date-object-in-javascript */}
            {Intl.DateTimeFormat('en', {
              dateStyle: 'full',
            }).format(new Date(snippet.updatedAt.slice(0, -1)))}{' '}
          </Text>
        </div>
      </Box>
    </Box>
  )
}

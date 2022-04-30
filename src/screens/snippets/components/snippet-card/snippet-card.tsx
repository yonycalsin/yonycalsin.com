import * as React from 'react'
import { Badge, Box, Text, useColorModeValue } from '@chakra-ui/react'

export interface SnippetCardProps {
  title: string
  updatedAt: string
}

export function SnippetCard(props: SnippetCardProps) {
  const { title, updatedAt } = props

  const backgroundColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <Box backgroundColor={backgroundColor} borderRadius="md" w="full">
      <Box px="6" py="4">
        <Text fontWeight="bold">{title}</Text>
      </Box>
      <Box as="pre" backgroundColor="gray.700" px="6" py="4" textColor="white">
        <code>
          {`()=> {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    )
}
`}
        </code>
      </Box>
      <Box px="6" py="4" display="flex" alignItems="center" justifyContent="space-between" gap="6">
        <Box display="flex" flexWrap="wrap" gap="3">
          <Badge colorScheme="facebook">React</Badge>
          <Badge colorScheme="orange">Typescript</Badge>
          <Badge colorScheme="green">Git</Badge>
          <Badge colorScheme="purple">Arch Linux</Badge>
        </Box>
        <div>
          <Text fontSize="sm" textColor="gray" fontStyle="italic">
            Created at{' '}
            {/* https://bobbyhadz.com/blog/javascript-convert-iso-string-to-date-object#convert-an-iso-string-to-a-date-object-in-javascript */}
            {Intl.DateTimeFormat('en', {
              dateStyle: 'full',
            }).format(new Date(updatedAt.slice(0, -1)))}{' '}
          </Text>
        </div>
      </Box>
    </Box>
  )
}

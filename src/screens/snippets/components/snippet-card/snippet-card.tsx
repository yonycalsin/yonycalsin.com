import * as React from 'react'
import { Badge, Box, Text, useColorModeValue } from '@chakra-ui/react'

export function SnippetCard() {
  const backgroundColor = useColorModeValue('gray.100', 'gray.900')

  return (
    <Box backgroundColor={backgroundColor} borderRadius="md" w="full">
      <Box px="6" py="4">
        <Text fontWeight="bold">First example snippet with jsx</Text>
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
            {Intl.DateTimeFormat('en', {
              dateStyle: 'full',
            }).format()}{' '}
          </Text>
        </div>
      </Box>
    </Box>
  )
}

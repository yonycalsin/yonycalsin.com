import * as React from 'react'
import { Box, Container, Text, useColorModeValue, VStack } from '@chakra-ui/react'

export function Footer() {
  const backgroundColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box as="footer" bg={backgroundColor} py="12">
      <Container maxW="container.md">
        <VStack>
          <Text fontWeight="bold">Created By Yony Calsin</Text>
          <Text textColor="gray.600">Built with Next.js, MDX, Chakra-Ui and Vercel</Text>
        </VStack>
      </Container>
    </Box>
  )
}

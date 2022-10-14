import * as React from 'react'
import { Box, Container, Text, VStack } from '@chakra-ui/react'

import { CommandBarStartAction } from '~/components/command-bar'

export function Footer() {
  return (
    <Box as="footer" py="12">
      <Container maxW="container.md">
        <VStack>
          <Text fontWeight="bold">Created By Yony Calsin</Text>
          <Text textColor="gray.600">Built with Next.js, MDX, Chakra-Ui and Vercel</Text>
          <CommandBarStartAction />
        </VStack>
      </Container>
    </Box>
  )
}

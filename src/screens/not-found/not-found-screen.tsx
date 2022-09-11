import * as React from 'react'
import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react'
import RouterLink from 'next/link'

import { MainLayout } from '~/layouts'

export function NotFoundScreen() {
  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="12">
        <VStack spacing="12">
          <Heading>😢</Heading>
          <Heading>Page not found</Heading>
          <Box
            display="flex"
            flexDirection={{
              base: 'column',
              md: 'row',
            }}
            gap="6"
          >
            <RouterLink href="/" passHref>
              <Button as="a" variant="link" colorScheme="primary">
                Go to home
              </Button>
            </RouterLink>
            <Text
              display={{
                base: 'none',
                md: 'block',
              }}
            >
              •
            </Text>
            <RouterLink href="/me" passHref>
              <Button as="a" variant="link" colorScheme="primary">
                Go to about-me page
              </Button>
            </RouterLink>
            <Text
              display={{
                base: 'none',
                md: 'block',
              }}
            >
              •
            </Text>
            <RouterLink href="/projects" passHref>
              <Button as="a" variant="link" colorScheme="primary">
                Go to projects page
              </Button>
            </RouterLink>
          </Box>
        </VStack>
      </Container>
    </MainLayout>
  )
}

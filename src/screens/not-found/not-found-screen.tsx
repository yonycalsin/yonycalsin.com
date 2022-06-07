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
          <Heading>Página no encontrada</Heading>
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
                Ir al inicio
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
                Ir a acerca de mí
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
                Ir a los proyectos
              </Button>
            </RouterLink>
          </Box>
        </VStack>
      </Container>
    </MainLayout>
  )
}

import * as React from 'react'
import { Box, Container, Heading, Link, ListItem, Text, UnorderedList } from '@chakra-ui/react'

import { MainLayout } from '~/layouts'

export function ContactScreen() {
  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <Heading mb="3">Contacto</Heading>

        <Text>
          Hola, soy Yony, un desarrollador de software de primera categoría. Construyo proyectos de código abierto y
          escribo sobre JavaScript moderno, Node.js, diseño y desarrollo web. Únete a más de 10.000 desarrolladores para
          recibir mi boletín electrónico. 👇 Desabónate con un solo clic en cualquier momento.
        </Text>

        <Box
          as="iframe"
          width={480}
          height={150}
          src="https://yonycalsin.substack.com/embed"
          frameBorder={0}
          scrolling="no"
          w="full"
        />

        <UnorderedList spacing="3">
          <ListItem>
            <strong>Email</strong>:{' '}
            <Link color="primary.300" href="mailto:helloyonycalsin@gmail.com">
              @yonycalsin
            </Link>
          </ListItem>
          <ListItem>
            <strong>GitHub</strong>:{' '}
            <Link color="primary.300" href="https://github.com/yonycalsin" target="_blank" rel="noreferrer">
              @yonycalsin
            </Link>
          </ListItem>
          <ListItem>
            <strong>Twitter</strong>:{' '}
            <Link color="primary.300" href="https://twitter.com/yonycalsin" target="_blank" rel="noreferrer">
              @yonycalsin
            </Link>
          </ListItem>
          <ListItem>
            <strong>Patreon</strong>:{' '}
            <Link color="primary.300" href="https://patreon.com/yonycalsin" target="_blank" rel="noreferrer">
              @yonycalsin
            </Link>
          </ListItem>
          <ListItem>
            <strong>Ko-Fi</strong>:{' '}
            <Link color="primary.300" href="https://ko-fi.com/yonycalsin" target="_blank" rel="noreferrer">
              @yonycalsin
            </Link>
          </ListItem>
          <ListItem>
            <strong>Feed</strong>:{' '}
            <Link color="primary.300" href="https://yonycalsin.app/rss.xml" target="_blank" rel="noreferrer">
              RSS
            </Link>
          </ListItem>
        </UnorderedList>
      </Container>
    </MainLayout>
  )
}

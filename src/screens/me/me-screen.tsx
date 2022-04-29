import * as React from 'react'
import { Box, Container, Heading, Link, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react'

import { MainLayout } from '~/layouts'

export function MeScreen() {
  return (
    <MainLayout>
      <Container maxW="container.md" as="main" py="10">
        <VStack spacing="5" alignItems="flex-start">
          <header>
            <Heading>Sobre Mi</Heading>

            <Box as="blockquote" borderLeft="4px" p="3" mt="3">
              <Text as="q">Desarrollador de software, open-sourcerer (OSS).</Text>
            </Box>
          </header>

          <Text>
            Hola, soy Yony. Soy un desarrollador de software <b>autodidacta</b> que trabaja en{' '}
            <Link fontWeight="bold" href="https://riqra.com/" target="_blank" rel="noopener noreferrer">
              Riqra
            </Link>
            . Bienvenidos a mi espacio en la web para proyectos que he creado, reflexiones y cualquier otra cosa que
            quiera mostrar al mundo.
          </Text>

          <Text>
            Me encanta crear proyectos de código abierto y compartir lo que aprendo. Este sitio web es mi patio digital,
            un compendio de las cosas que he aprendido y creado a lo largo de los años.
          </Text>

          <Heading size="md">Lo que estoy haciendo ahora</Heading>

          <UnorderedList spacing="3">
            <ListItem>
              Actualmente trabajo a tiempo completo en{' '}
              <Link fontWeight="bold" href="https://riqra.com/" target="_blank" rel="noopener noreferrer">
                Riqra.
              </Link>
            </ListItem>
            <ListItem>Escribo sobre GraphQL y Api REST.</ListItem>
            <ListItem>Creando mi blog con contentlayer, prisma, planetscale (MYSQL), y MDX.</ListItem>
            <ListItem>
              Leyendo el libro{' '}
              <Link fontWeight="bold" href="https://basecamp.com/shapeup" target="_blank" rel="noopener noreferrer">
                Shape Up
              </Link>{' '}
              de Basecamp.
            </ListItem>
          </UnorderedList>

          <Text>Estos son algunos apuntes al azar acerca de mí:</Text>

          <UnorderedList spacing="3">
            <ListItem>
              Me fascina escribir código limpio y hermoso <i>(Clean Code)</i>.
            </ListItem>
            <ListItem>Mi tipo de juego favorito actual es el de estrategia.</ListItem>
            <ListItem>Llevo escribiendo en este blog desde 2017.</ListItem>
          </UnorderedList>

          <Heading size="md">Contacto</Heading>

          <Text>
            Puedes contactar conmigo por correo electrónico en <i>helloyonycalsin at gmail.com</i>.
          </Text>

          <UnorderedList spacing="3">
            <ListItem>
              <strong>GitHub</strong>:{' '}
              <Link color="primary.500" href="https://github.com/yonycalsin" target="_blank" rel="noopener noreferrer">
                @yonycalsin
              </Link>
            </ListItem>
            <ListItem>
              <strong>Twitter</strong>:{' '}
              <Link color="primary.500" href="https://twitter.com/yonycalsin" target="_blank" rel="noopener noreferrer">
                @yonycalsin
              </Link>
            </ListItem>
            <ListItem>
              <strong>Linkedin</strong>:{' '}
              <Link
                color="primary.500"
                href="https://www.linkedin.com/in/yonycalsin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @yonycalsin
              </Link>
            </ListItem>
          </UnorderedList>

          <Heading size="md">Herramientas que uso en mi dia a dia</Heading>

          <UnorderedList spacing="3">
            <ListItem>
              <Link color="primary.500" href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                Visual Studio Code
              </Link>
              {' + '}
              <Link color="primary.500" href="https://www.nano-editor.org/" target="_blank" rel="noopener noreferrer">
                Nano
              </Link>
            </ListItem>
            <ListItem>Windows Powershell + Windows Subsystem for Linux (Ubuntu)</ListItem>
            <ListItem>Docker Desktop</ListItem>
            <ListItem>
              <Link
                color="primary.500"
                href="https://www.google.com/intl/en-419/chrome/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chrome Navigator
              </Link>
            </ListItem>
            <ListItem>
              <Link color="primary.500" href="https://github.com/" rel="noopener noreferrer">
                Github
              </Link>
              {' + '}
              <Link color="primary.500" href="https://cli.github.com/" target="_blank" rel="noopener noreferrer">
                Github CLI
              </Link>
              {' + '}
              <Link color="primary.500" href="https://github.com/features/actions">
                Github Actions (CI/CD)
              </Link>
            </ListItem>
            <ListItem>
              <Link color="primary.500" href="https://www.notion.so/" target="_blank" rel="noopener noreferrer">
                Notion
              </Link>
            </ListItem>
            <ListItem>Vercel + Netlify + Heroku</ListItem>
            <ListItem>Git</ListItem>
            <ListItem>Node Version Manager (NVM)</ListItem>
            <ListItem>
              <Link color="primary.500" href="https://insomnia.rest/" target="_blank" rel="noopener noreferrer">
                Insomnia (The Collaborative API Client and Design Tool)
              </Link>
            </ListItem>
            <ListItem>etc...</ListItem>
          </UnorderedList>
        </VStack>
      </Container>
    </MainLayout>
  )
}

import * as React from 'react'
import { Box, Container, HStack, Link, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import RouterLink from 'next/link'

import JavascriptLogo from '~/assets/images/javascript.webp'

export const Header = () => {
  const backgroundColor = useColorModeValue('gray.50', 'gray.900')

  return (
    <Box w="full" top="0" zIndex="banner" left="0" background={backgroundColor}>
      <Container
        maxW="container.md"
        py={{
          base: '5',
          md: '8',
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <RouterLink href="/" passHref>
          <Link display="contents">
            <Image src={JavascriptLogo} layout="intrinsic" width={32} height={32} priority alt="" />
          </Link>
        </RouterLink>

        <HStack spacing="4">
          <RouterLink href="/projects" passHref>
            <Link color="primary.500" fontWeight="bold">
              Projectos
            </Link>
          </RouterLink>
          <RouterLink href="/me" passHref>
            <Link color="primary.500" fontWeight="bold">
              Sobre Mi
            </Link>
          </RouterLink>
        </HStack>
      </Container>
    </Box>
  )
}

import isotipo from 'assets/brand/images/isotipo.png'

import * as React from 'react'
import { Box, Container, HStack, Link } from '@chakra-ui/react'
import Image from 'next/image'
import RouterLink from 'next/link'
import { Flag } from 'toggled'

import type { HeaderProps } from 'typings/layouts'
import { Features } from 'utils/constants'

function Header(props: HeaderProps) {
  const { container } = props

  return (
    <Box
      w="full"
      top="0"
      zIndex="banner"
      left="0"
      boxShadow="xs"
      _dark={{
        boxShadow: 'lg',
      }}
    >
      <Container
        maxW={container}
        py={{
          base: '5',
          md: '8',
        }}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <RouterLink href="/" passHref legacyBehavior>
          <Link display="contents">
            <Image src={isotipo} width={32} height={32} alt="Logo" />
          </Link>
        </RouterLink>
        <HStack spacing="4">
          <RouterLink href="/projects" passHref legacyBehavior>
            <Link color="primary.500" fontWeight="bold">
              Projects
            </Link>
          </RouterLink>
          <RouterLink href="/me" passHref legacyBehavior>
            <Link color="primary.500" fontWeight="bold">
              About Me
            </Link>
          </RouterLink>
          <Flag flagQuery={Features.FAQ}>
            <RouterLink href="/faq" passHref legacyBehavior>
              <Link color="primary.500" fontWeight="bold">
                FAQ
              </Link>
            </RouterLink>
          </Flag>
          <Flag flagQuery={Features.USES}>
            <RouterLink href="/uses" passHref legacyBehavior>
              <Link
                color="primary.500"
                fontWeight="bold"
                display={{
                  base: 'none',
                  md: 'block',
                }}
              >
                Uses
              </Link>
            </RouterLink>
          </Flag>
          <Flag flagQuery={Features.SNIPPETS}>
            <RouterLink href="/blog/categories/snippet" passHref legacyBehavior>
              <Link
                color="primary.500"
                fontWeight="bold"
                display={{
                  base: 'none',
                  md: 'block',
                }}
              >
                Snippets
              </Link>
            </RouterLink>
          </Flag>
        </HStack>
      </Container>
    </Box>
  )
}

Header.defaultProps = {
  container: 'container.md',
}

export default Header

import * as React from 'react'
import { Link, VStack } from '@chakra-ui/react'

import { socialLinks } from '~/utils/constants'

export const FloatSocials = () => {
  return (
    <VStack
      display={{
        base: 'none',
        lg: 'flex',
      }}
      spacing="5"
      position="fixed"
      bottom="8"
      left="8"
    >
      <Link target="_blank" rel="noreferrer" href={socialLinks.GITHUB}>
        Github
      </Link>
      <Link target="_blank" rel="noreferrer" href={socialLinks.LINKEDIN}>
        Linkedin
      </Link>
      <Link target="_blank" rel="noreferrer" href={socialLinks.TWITTER}>
        Twitter
      </Link>
      <Link target="_blank" rel="noreferrer" href={socialLinks.EMAIL}>
        Email
      </Link>
    </VStack>
  )
}

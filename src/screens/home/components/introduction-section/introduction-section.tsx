import * as React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { Button, Heading, HStack, Text, useBreakpointValue, VStack } from '@chakra-ui/react'

import { CommandBarStartAction } from '~/components/command-bar'
import { ExternalAnchor } from '~/components/external-anchor'
import { socialLinks } from '~/utils/constants/constants'

export function IntroductionSection() {
  const socialButtonSize = useBreakpointValue({
    base: 'xs',
    md: 'sm',
    lg: 'md',
  })

  return (
    <VStack spacing="6" alignItems="flex-start" py="3">
      <Heading as="h1" size="lg" fontWeight="extrabold">
        Hi, I&rsquo;m Yony Calsin.
      </Heading>
      <Text lineHeight="7">
        I&rsquo;m a software developer from <b>Perú</b>. I work at{' '}
        <ExternalAnchor href="https://www.linkedin.com/company/making-sense-llc">Making Sense</ExternalAnchor> as a{' '}
        <b>Frontend Developer.</b>
      </Text>
      <CommandBarStartAction />
      <HStack>
        <Button
          as="a"
          href={socialLinks.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          leftIcon={<TiSocialLinkedin />}
          rightIcon={<BiLinkExternal />}
          variant="ghost"
          colorScheme="linkedin"
          size={socialButtonSize}
        >
          Linkedin
        </Button>
        <Button
          as="a"
          href={socialLinks.GITHUB}
          target="_blank"
          rel="noreferrer"
          leftIcon={<TiSocialGithub />}
          rightIcon={<BiLinkExternal />}
          variant="ghost"
          colorScheme="primary"
          size={socialButtonSize}
        >
          Github
        </Button>
        <Button
          as="a"
          href={socialLinks.TWITTER}
          target="_blank"
          rel="noreferrer"
          leftIcon={<TiSocialTwitter />}
          rightIcon={<BiLinkExternal />}
          variant="ghost"
          colorScheme="twitter"
          size={socialButtonSize}
        >
          Twitter
        </Button>
      </HStack>
    </VStack>
  )
}

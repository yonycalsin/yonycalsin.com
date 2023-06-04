import * as React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

import { Heading, Icon } from 'components'
import { Button } from 'components/ui/button'
import { SOCIAL_LINKS } from 'utils/constants'

function IntroductionSection() {
  return (
    <div className="space-y-6 flex flex-col py-3 items-start">
      <Heading size="h1">Hi, I&rsquo;m Yony Calsin.</Heading>
      <p>
        I&rsquo;m a software developer from <b>Perú</b>.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button asChild={true}>
          <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
            <Icon className="mr-2">
              <TiSocialLinkedin />
            </Icon>
            Linkedin
            <Icon className="ml-2">
              <BiLinkExternal />
            </Icon>
          </a>
        </Button>
        <Button asChild={true}>
          <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
            <Icon className="mr-2">
              <TiSocialGithub />
            </Icon>
            Github
            <Icon className="ml-2">
              <BiLinkExternal />
            </Icon>
          </a>
        </Button>
        <Button asChild={true}>
          <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer">
            <Icon className="mr-2">
              <TiSocialTwitter />
            </Icon>
            Twitter
            <Icon className="ml-2">
              <BiLinkExternal />
            </Icon>
          </a>
        </Button>
      </div>
    </div>
  )
}

export default IntroductionSection

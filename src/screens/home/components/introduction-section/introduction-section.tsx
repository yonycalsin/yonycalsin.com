import * as React from 'react'
import { BiLinkExternal } from 'react-icons/bi'
import { TiSocialGithub, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'

import { Button, ExternalAnchor, Heading, Icon } from 'components'
import { SOCIAL_LINKS } from 'utils/constants'

function IntroductionSection() {
  return (
    <div className="space-y-6 flex flex-col py-3 items-start">
      <Heading size="h1">Hi, I&rsquo;m Yony Calsin.</Heading>
      <p>
        I&rsquo;m a software developer from <b>Perú</b>.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer">
          <Button
            variant="outline"
            palette="primary"
            leftElement={
              <Icon>
                <TiSocialLinkedin />
              </Icon>
            }
            rightElement={
              <Icon>
                <BiLinkExternal />
              </Icon>
            }
          >
            Linkedin
          </Button>
        </a>
        <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer">
          <Button
            variant="outline"
            palette="success"
            leftElement={
              <Icon>
                <TiSocialGithub />
              </Icon>
            }
            rightElement={
              <Icon>
                <BiLinkExternal />
              </Icon>
            }
          >
            Github
          </Button>
        </a>
        <a href={SOCIAL_LINKS.TWITTER} target="_blank" rel="noreferrer">
          <Button
            variant="outline"
            palette="secondary"
            leftElement={
              <Icon>
                <TiSocialLinkedin />
              </Icon>
            }
            rightElement={
              <Icon>
                <TiSocialTwitter />
              </Icon>
            }
          >
            Twitter
          </Button>
        </a>
      </div>
    </div>
  )
}

export default IntroductionSection

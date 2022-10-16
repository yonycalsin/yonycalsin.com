import * as React from 'react'
import { Link, VStack } from '@chakra-ui/react'

import { analytics, ANALYTICS_EVENTS } from 'analytics'
import { SOCIAL_LINKS } from 'utils/constants'

/**
 * @deprecated this component will be remove in the future
 */
function FloatSocials() {
  const onEventClick = (social: string) => {
    analytics.event({
      action: ANALYTICS_EVENTS.CLICK_IN_FLOAT_SOCIAL_LINK,
      category: 'redirect-external-link',
      label: social,
    })
  }

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
      <Link target="_blank" rel="noreferrer" href={SOCIAL_LINKS.GITHUB} onClick={() => onEventClick('github')}>
        Github
      </Link>
      <Link target="_blank" rel="noreferrer" href={SOCIAL_LINKS.LINKEDIN} onClick={() => onEventClick('linkedin')}>
        Linkedin
      </Link>
      <Link target="_blank" rel="noreferrer" href={SOCIAL_LINKS.TWITTER} onClick={() => onEventClick('twitter')}>
        Twitter
      </Link>
      <Link target="_blank" rel="noreferrer" href={SOCIAL_LINKS.EMAIL} onClick={() => onEventClick('email')}>
        Email
      </Link>
    </VStack>
  )
}

export default FloatSocials

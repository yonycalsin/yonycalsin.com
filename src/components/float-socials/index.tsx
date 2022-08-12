import * as React from 'react'
import { Link, VStack } from '@chakra-ui/react'

import { analyticsEvents } from '~/analytics/events'
import { analytics } from '~/analytics/google-analytics'
import { socialLinks } from '~/utils/constants'

/**
 * @deprecated this component will be remove in the future
 */
export const FloatSocials = () => {
  const onEventClick = (social: string) => {
    analytics.event({
      action: analyticsEvents.CLICK_IN_FLOAT_SOCIAL_LINK,
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
      <Link target="_blank" rel="noreferrer" href={socialLinks.GITHUB} onClick={() => onEventClick('github')}>
        Github
      </Link>
      <Link target="_blank" rel="noreferrer" href={socialLinks.LINKEDIN} onClick={() => onEventClick('linkedin')}>
        Linkedin
      </Link>
      <Link target="_blank" rel="noreferrer" href={socialLinks.TWITTER} onClick={() => onEventClick('twitter')}>
        Twitter
      </Link>
      <Link target="_blank" rel="noreferrer" href={socialLinks.EMAIL} onClick={() => onEventClick('email')}>
        Email
      </Link>
    </VStack>
  )
}

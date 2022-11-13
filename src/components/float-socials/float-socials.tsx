'use client'

import * as React from 'react'

import { analytics, ANALYTICS_EVENTS } from 'analytics'
import { Anchor } from 'components/anchor'
import { SOCIAL_LINKS } from 'utils/constants'

function FloatSocials() {
  const onEventClick = (social: string) => {
    analytics.event({
      action: ANALYTICS_EVENTS.CLICK_IN_FLOAT_SOCIAL_LINK,
      category: 'redirect-external-link',
      label: social,
    })
  }

  return (
    <div className="space-y-5 fixed bottom-8 left-8 hidden lg:flex flex-col">
      <Anchor target="_blank" rel="noreferrer" href={SOCIAL_LINKS.GITHUB} onClick={() => onEventClick('github')}>
        Github
      </Anchor>
      <Anchor target="_blank" rel="noreferrer" href={SOCIAL_LINKS.LINKEDIN} onClick={() => onEventClick('linkedin')}>
        Linkedin
      </Anchor>
      <Anchor target="_blank" rel="noreferrer" href={SOCIAL_LINKS.TWITTER} onClick={() => onEventClick('twitter')}>
        Twitter
      </Anchor>
      <Anchor target="_blank" rel="noreferrer" href={SOCIAL_LINKS.EMAIL} onClick={() => onEventClick('email')}>
        Email
      </Anchor>
    </div>
  )
}

export default FloatSocials

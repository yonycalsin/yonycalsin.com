import * as React from 'react'

import type { MetaProps } from 'typings/components'

function Meta(props: MetaProps) {
  const { notRobots = false } = props

  const { description, titleTemplate, defaultTitle, twitterUsername, websiteUrl, socialBannerImage } = {
    description:
      'Software Developer creating open source projects and writing on modern JavaScript, Node.js, Typescript and Graphql.',
    titleTemplate: '%s - Yony Calsin',
    defaultTitle: 'Yony Calsin - Software Developer',
    twitterUsername: '@yonycalsin',
    websiteUrl: 'https://www.yonycalsin.com',
    socialBannerImage: 'https://avatars.githubusercontent.com/u/58490737?v=4',
  }

  return (
    <>
      <meta name="robots" content={notRobots ? 'noindex, nofollow, noimageindex, indexifembedded' : 'index, follow'} />
      <meta
        name="googlebot"
        content={notRobots ? 'noindex, nofollow, noimageindex, indexifembedded' : 'index, follow'}
      />

      <meta name="description" content={description} />
      <meta name="image" content={socialBannerImage} />

      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialBannerImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialBannerImage} />

      <title>{props.title ? titleTemplate.replace('%s', props.title) : 'Yony Calsin - Software Developer'}</title>
    </>
  )
}

export default Meta

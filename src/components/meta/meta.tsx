import * as React from 'react'

import type { MetaProps } from 'typings/components'

function Meta(props: MetaProps) {
  const { notRobots = false } = props

  const { description, titleTemplate, defaultTitle, twitterUsername, websiteUrl, imageUrl } = {
    description:
      'Software Developer creating open source projects and writing on modern JavaScript, Node.js, Typescript and Graphql.',
    titleTemplate: '%s - Yony Calsin',
    defaultTitle: 'Yony Calsin - Software Developer',
    twitterUsername: '@yonycalsin',
    websiteUrl: 'https://www.yonycalsin.com',
    // Because OG images must have a absolute URL, we use the
    imageUrl:
      // `VERCEL_URL` environment variable to get the deployment’s URL.
      // More info:
      // https://vercel.com/docs/concepts/projects/environment-variables
      `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''}/api/og`,
  }

  return (
    <>
      <meta name="robots" content={notRobots ? 'noindex, nofollow, noimageindex, indexifembedded' : 'index, follow'} />
      <meta
        name="googlebot"
        content={notRobots ? 'noindex, nofollow, noimageindex, indexifembedded' : 'index, follow'}
      />

      <meta name="description" content={description} />
      <meta name="image" content={imageUrl} />

      <meta property="og:url" content={websiteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={defaultTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={defaultTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      <title>{props.title ? titleTemplate.replace('%s', props.title) : 'Yony Calsin - Software Developer'}</title>
    </>
  )
}

export default Meta

import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'gatsby-plugin-react-i18next'

const query = graphql`
   query MyQuery {
      site {
         siteMetadata {
            description
            defaultTitle: title
            titleTemplate
            twitterUsername
            websiteUrl: url
            socialBannerImage
         }
      }
   }
`

type MetaProps = {
   title?: string
}

export const Meta = (props: MetaProps) => {
   const response = useStaticQuery(query)

   const {
      description,
      titleTemplate,
      defaultTitle,
      twitterUsername,
      websiteUrl,
      socialBannerImage,
   } = response.site.siteMetadata

   const schemaOrgJSONLD = [
      {
         '@context': 'https://schema.org',
         '@type': 'Organization',
         url: 'https://www.yonycalsin.com',
         name: defaultTitle,
         alternateName: defaultTitle,
      },
   ]

   return (
      <Helmet>
         <meta name="robots" content="index,follow" />
         <meta name="googlebot" content="index,follow" />

         <meta name="description" content={description} />
         <meta name="image" content={socialBannerImage} />

         <script type="application/ld+json">
            {JSON.stringify(schemaOrgJSONLD)}
         </script>

         <link rel="icon" href={socialBannerImage} type="image/png" />
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

         <title>
            {props.title
               ? titleTemplate.replace('%s', props.title)
               : defaultTitle}
         </title>
      </Helmet>
   )
}

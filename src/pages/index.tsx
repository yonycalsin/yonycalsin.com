import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { Meta } from 'components/meta'
import { HomeLayout } from 'layouts'
import { socialLinks } from 'utils/constants'

export default function Home() {
   const { t } = useTranslation()

   return (
      <HomeLayout isStandaloneBrand>
         <Meta />
         <div className="hidden md:block">
            <h1 className="text-center dark:text-white ">
               <q>Yony Calsin</q>
            </h1>
         </div>

         <div className="text-center break-words">
            <p className="lead dark:text-gray-100">{t('description')}</p>
            <div className="flex items-center justify-center space-x-2">
               <a
                  href={socialLinks.GITHUB}
                  className="border border-transparent hover:border-blue-100 px-2 py-2 rounded-sm"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img
                     src="https://cdn.svgporn.com/logos/github.svg"
                     alt="Linkedin"
                     className="h-4 md:h-5 filter dark:invert"
                  />
               </a>
               <a
                  href={socialLinks.LINKEDIN}
                  className="hover:bg-blue-100 px-2 py-2 rounded-sm"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img
                     src="https://cdn.svgporn.com/logos/linkedin.svg"
                     alt="Linkedin"
                     className="h-4 md:h-5"
                  />
               </a>
            </div>
         </div>

         <div>
            <pre>
               <code className="gradient-primary text-black font-bold">
                  {JSON.stringify(
                     t('snippet', {
                        returnObjects: true,
                     }),
                     undefined,
                     2,
                  )}
               </code>
            </pre>
         </div>

         <div className="grid lg:grid-cols-2 gap-4">
            {t<any, any>('quotes', {
               returnObjects: true,
            }).map(quote => (
               <div key={quote.phrase}>
                  <blockquote>
                     {quote.phrase}
                     <br />
                     <b>— {quote.author}</b>
                  </blockquote>
               </div>
            ))}
         </div>
      </HomeLayout>
   )
}

export const query = graphql`
   query($language: String!) {
      locales: allLocale(filter: { language: { eq: $language } }) {
         edges {
            node {
               ns
               data
               language
            }
         }
      }
   }
`

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { Meta } from 'components/meta'
import { HomeLayout } from 'layouts'

export default function Home() {
   const { t } = useTranslation()

   return (
      <HomeLayout isStandaloneBrand>
         <Meta />
         <div>
            <h1 className="text-center dark:text-white ">
               <q>Yony Calsin</q>
            </h1>
         </div>

         <div className="text-center break-words">
            <p className="lead dark:text-gray-100">{t('description')}</p>
            <div className="flex items-center justify-center">
               <a
                  href="https://github.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4"
               >
                  <img
                     src="https://img.shields.io/github/followers/yonycalsin?style=social"
                     alt="Github Yony Calsin"
                     style={{ margin: 0 }}
                  />
               </a>
               <a
                  href="https://twitter.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img
                     src="https://img.shields.io/twitter/follow/yonycalsin.svg?style=social&label=Follow"
                     alt="Yony Calsin Twitter"
                     style={{ margin: 0 }}
                  />
               </a>
            </div>
         </div>

         <div>
            <pre>
               <code
                  style={{
                     background:
                        'linear-gradient(45deg, rgb(238, 97, 97), rgb(254, 212, 2), rgb(5, 227, 156), rgb(1, 208, 251))',
                     color: 'black',
                     fontWeight: 'bold',
                  }}
               >
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

import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { HomeLayout } from 'layouts'

export default function Home() {
   const { t } = useTranslation()

   return (
      <HomeLayout>
         <h1>{t('contact')}</h1>

         <p>
            Hi, I'm Yony, a top-notch software developer. I build open source
            projects and write about modern JavaScript, Node.js, web design and
            development. Join over 10,000+ developers to receive my email
            newsletter. 👇 Unsubscribe with a single click at any time.
         </p>

         <iframe
            width={480}
            height={150}
            src="https://yonycalsin.substack.com/embed"
            frameBorder={0}
            scrolling="no"
            className="w-full border-2 rounded-md border-gray-100 hover:border-green-500 border-dashed"
            title="Substack Yony Calsin"
         />

         <ul>
            <li>
               <strong>Email</strong>:{' '}
               <a href="mailto:helloyonycalsin@gmail.com">@yonycalsin</a>
            </li>
            <li>
               <strong>GitHub</strong>:{' '}
               <a
                  href="https://github.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
               >
                  @yonycalsin
               </a>
            </li>
            <li>
               <strong>Twitter</strong>:{' '}
               <a
                  href="https://twitter.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
               >
                  @yonycalsin
               </a>
            </li>
            <li>
               <strong>Patreon</strong>:{' '}
               <a
                  href="https://patreon.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
               >
                  @yonycalsin
               </a>
            </li>
            <li>
               <strong>Ko-Fi</strong>:{' '}
               <a
                  href="https://ko-fi.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
               >
                  @yonycalsin
               </a>
            </li>
            <li>
               <strong>Feed</strong>:{' '}
               <a
                  href="https://yonycalsin.netlify.app/rss.xml"
                  target="_blank"
                  rel="noreferrer"
               >
                  RSS
               </a>
            </li>
         </ul>
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

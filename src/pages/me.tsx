import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { Meta } from '~/components/meta'
import { HomeLayout } from '~/layouts'

export default function Home() {
   const { t } = useTranslation()

   return (
      <HomeLayout>
         <Meta title="Sobre Mi" />
         <h1>{t('about-me.title')}</h1>
         <p>{t('about-me.description')}</p>

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

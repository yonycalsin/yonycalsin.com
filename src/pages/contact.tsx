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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
            quaerat nostrum tempore, perspiciatis illo et corporis iste
            laboriosam ab perferendis molestiae, nulla illum vel omnis rerum
            eius aperiam. Magni, velit.
         </p>

         <ul>
            <li>
               <strong>Email</strong>:{' '}
               <a href="mailto:helloyonycalsin@gmail.com">@yonycalsin</a>
            </li>
            <li>
               <strong>GitHub</strong>:{' '}
               <a href="https://github.com/yonycalsin">@yonycalsin</a>
            </li>
            <li>
               <strong>Twitter</strong>:{' '}
               <a href="https://twitter.com/yonycalsin">@yonycalsin</a>
            </li>
            <li>
               <strong>Patreon</strong>:{' '}
               <a href="https://patreon.com/yonycalsin">@yonycalsin</a>
            </li>
            <li>
               <strong>Ko-Fi</strong>:{' '}
               <a href="https://ko-fi.com/yonycalsin">@yonycalsin</a>
            </li>
            <li>
               <strong>Feed</strong>:{' '}
               <a href="https://yonycalsin.netlify.app/rss.xml">RSS</a>
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

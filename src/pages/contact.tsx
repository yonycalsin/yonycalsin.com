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
            <li>Twitter</li>
            <li>Email</li>
            <li>Github</li>
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

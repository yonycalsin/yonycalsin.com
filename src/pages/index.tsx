import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { HomeLayout } from 'layouts'

export default function Home() {
   const { t } = useTranslation()

   return (
      <HomeLayout isStandaloneBrand>
         <div>
            <h1 className="text-center">Yony Calsin</h1>
            <p className="lead text-center">Node Fullstack Engineer</p>
         </div>

         <div className="text-center break-words">
            <p>{t('home.description.first')}</p>
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

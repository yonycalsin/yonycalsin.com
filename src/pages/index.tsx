import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { HomeLayout } from 'layouts'

export default function Home() {
   const { t } = useTranslation()

   return (
      <HomeLayout isStandaloneBrand>
         <div className="main">
            <div className="container">
               <div>
                  <h1 className="tac">Yony Calsin</h1>
                  <p className="tac subtitle">Node Fullstack Engineer</p>
               </div>

               <br />

               <div>
                  <p style={{ initialLetter: 4 }}>
                     {t('home.description.first')}
                  </p>
                  <p>{t('home.description.second')}</p>
               </div>
            </div>
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

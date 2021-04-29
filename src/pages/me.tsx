import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { graphql } from 'gatsby'

import { Meta } from 'components/meta'
import { HomeLayout } from 'layouts'

export default function Home() {
   const { t } = useTranslation()

   return (
      <HomeLayout>
         <Meta title="About Me" />
         <h1>{t('about-me.title')}</h1>
         <p>
            Hi, I'm Yony Calsin, a frontend developer, passionate about web
            programming (frontend, backend), throughout my career I've had the
            chance to work on several projects that have given me the
            opportunity to execute my knowledge in these areas and also to keep
            learning about them.
         </p>
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

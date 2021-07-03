import * as React from 'react'
import { graphql } from 'gatsby'

import { Meta } from 'components/meta'
import { HomeLayout } from 'layouts'
import { socialLinks } from 'utils/constants'

function ProjectsPage() {
   return (
      <HomeLayout>
         <Meta title="Proyectos" />

         <h1>Proyectos</h1>

         <p>
            Algunos aspectos destacados de mis proyectos de código abierto.
            Véalos todos <a href={socialLinks.GITHUB}>en GitHub</a>.
         </p>
      </HomeLayout>
   )
}

export default ProjectsPage

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

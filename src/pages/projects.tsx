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
            Véalos todos{' '}
            <a href={socialLinks.GITHUB} target="blank">
               en GitHub
            </a>
            .
         </p>

         <div className="timeline relative space-y-2">
            <div>
               <div className="bg-primary absolute h-6 w-6 flex items-center justify-center rounded-full">
                  <img
                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg"
                     alt=""
                  />
               </div>
               <div className="ml-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                  modi alias ad dignissimos vitae, vero harum, perferendis
                  obcaecati dolore quia aperiam cupiditate impedit cum illum
                  porro? Deleniti doloremque aperiam maxime?
               </div>
            </div>
            <div>
               <div className="bg-primary absolute h-6 w-6 flex items-center justify-center rounded-full">
                  <img
                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-picture.svg"
                     alt=""
                  />
               </div>
               <div className="ml-8">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                  modi alias ad dignissimos vitae, vero harum, perferendis
                  obcaecati dolore quia aperiam cupiditate impedit cum illum
                  porro? Deleniti doloremque aperiam maxime?
               </div>
            </div>
         </div>
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

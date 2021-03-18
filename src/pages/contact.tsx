import * as React from 'react'
import { graphql } from 'gatsby'

import { HomeLayout } from 'layouts'
import siteConfig from 'utils/site-config'

export default function Home() {
   return (
      <HomeLayout>
         <br />
         <div className="container">
            <div>Hello World {siteConfig.siteTitle} Website!</div>
            <h1>Contact Page</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit.
               Blanditiis quaerat nostrum tempore, perspiciatis illo et corporis
               iste laboriosam ab perferendis molestiae, nulla illum vel omnis
               rerum eius aperiam. Magni, velit.
            </p>
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

import * as React from 'react'
import { graphql } from 'gatsby'
import { sample } from 'lodash'

import { Tag } from 'components'
import { Meta } from 'components/meta'
import { Clock } from 'icons/clock'
import { HomeLayout } from 'layouts'
import { socialLinks } from 'utils/constants'

const Item = ({ tags = [], title, description, demoHref }) => (
   <div>
      <div className="bg-white dark:bg-gray-700 shadow-md absolute h-6 w-6 p-1 flex items-center justify-center rounded-full dark:text-white">
         <Clock className="w-full h-full" />
      </div>
      <div className="ml-9">
         <a href={demoHref} target="__blank">
            <h4 className="font-bold m-0">{title}</h4>
         </a>
         <p>{description}</p>
         <div className="flex flex-wrap gap-1">
            {tags.map(item => (
               <Tag
                  className={sample([
                     'bg-primary',
                     'bg-secondary',
                     'bg-success',
                     'bg-error',
                  ])}
               >
                  {item}
               </Tag>
            ))}
         </div>
      </div>
   </div>
)

function ProjectsPage() {
   return (
      <HomeLayout>
         <Meta title="Proyectos" notRobots />

         <h1>Proyectos</h1>

         <p>
            Algunos aspectos destacados de mis proyectos de código abierto.
            Véalos todos{' '}
            <a href={socialLinks.GITHUB} target="blank">
               en GitHub
            </a>
            .
         </p>

         <div className="timeline relative space-y-5">
            <Item
               title="Slugger - URL Slug Generator"
               demoHref="https://slugger.yonycalsin.com/"
               description="Smart, fast and easy to use online tool built to generate search engine friendly and user friendly URL slugs"
               tags={['svelte', 'typescript', 'tailwindcss']}
            />

            <Item
               title="Musica Adventista - Music player"
               demoHref="https://musica-adventista.yonycalsin.com/"
               description="Music player without database."
               tags={[
                  'Typescript',
                  'Tailwind Css',
                  'Gatsby',
                  'React',
                  'Remark',
                  'Youtube Player',
                  'Spotify API',
               ]}
            />

            <Item
               title="Bencody - Code Tricks"
               demoHref="https://bencody.yonycalsin.com/"
               description="a system of code tricks in all languages, libraries, and frameworks."
               tags={[
                  'ReactJs',
                  'Typescript',
                  'Styled Components',
                  'Scss',
                  'Remark',
                  'Gatsby',
               ]}
            />

            <Item
               title="Pacolor - Infinite Color Palette Generator and Random"
               tags={['ReactJs', 'Styled Components', 'Typescript']}
               description="Pacolor is a progressive web application, which generates color
               palettes, without getting tired, and infinitely"
               demoHref="https://pacolor.yonycalsin.com/"
            />
            {/* <Item /> */}
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

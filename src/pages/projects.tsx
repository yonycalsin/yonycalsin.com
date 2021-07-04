import * as React from 'react'
import dayjs from 'dayjs'
import { graphql } from 'gatsby'
import { sample } from 'lodash'

import { Tag } from 'components'
import { Meta } from 'components/meta'
import { Clock } from 'icons/clock'
import { HomeLayout } from 'layouts'
import { dateFormat, socialLinks } from 'utils/constants'

const Item = ({
   tags = [],
   title,
   description,
   demoHref,
   startedAt = new Date(),
}) => (
   <div>
      <div className="bg-white dark:bg-gray-700 shadow-md absolute h-6 w-6 p-1 flex items-center justify-center rounded-full dark:text-white">
         <div className="absolute right-8 whitespace-nowrap hidden lg:block">
            <span className="italic">
               {dayjs(startedAt).format(dateFormat.PROJECT_DATE)}
            </span>
         </div>
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
               startedAt={new Date('05/16/2021')}
            />

            <Item
               title="Slugger - URL Slug Generator"
               demoHref="https://slugger.yonycalsin.com/"
               description="Smart, fast and easy to use online tool built to generate search engine friendly and user friendly URL slugs"
               tags={['svelte', 'typescript', 'tailwindcss']}
               startedAt={new Date('05/14/2021')}
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
               startedAt={new Date('12/20/2020')}
            />

            <Item
               title="Pacolor - Infinite Color Palette Generator and Random"
               tags={['ReactJs', 'Styled Components', 'Typescript']}
               description="Pacolor is a progressive web application, which generates color
               palettes, without getting tired, and infinitely"
               demoHref="https://pacolor.yonycalsin.com/"
               startedAt={new Date('06/09/2020')}
            />
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

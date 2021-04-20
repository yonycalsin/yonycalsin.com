import * as React from 'react'
import { graphql } from 'gatsby'

import { HomeLayout } from 'layouts'

export default function Home() {
   return (
      <HomeLayout isStandaloneBrand>
         <div>
            <h1 className="text-center">
               <q>Yony Calsin</q>
            </h1>
         </div>

         <div className="text-center break-words">
            <p className="lead">
               I am a frontend developer creating open source projects and
               writing on modern JavaScript, Node.js, Typescript and Graphql.
            </p>
            <div className="flex items-center justify-center">
               <a
                  href="https://github.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
                  className="mr-4"
               >
                  <img
                     src="https://img.shields.io/github/followers/yonycalsin?style=social"
                     alt="Github Yony Calsin"
                     style={{ margin: 0 }}
                  />
               </a>
               <a
                  href="https://twitter.com/yonycalsin"
                  target="_blank"
                  rel="noreferrer"
               >
                  <img
                     src="https://img.shields.io/twitter/follow/yonycalsin.svg?style=social&label=Follow"
                     alt="Yony Calsin Twitter"
                     style={{ margin: 0 }}
                  />
               </a>
            </div>
         </div>

         <div>
            <pre>
               <code
                  style={{
                     background:
                        'linear-gradient(45deg, rgb(238, 97, 97), rgb(254, 212, 2), rgb(5, 227, 156), rgb(1, 208, 251))',
                     color: 'black',
                     fontWeight: 'bold',
                  }}
               >
                  {JSON.stringify(
                     {
                        name: 'Yony Calsin',
                        nickname: '@yonycalsin',
                        role: 'Frontend Engineer',
                        location: 'Peru',
                     },
                     undefined,
                     2,
                  )}
               </code>
            </pre>
         </div>

         <div className="grid lg:grid-cols-2 gap-4">
            <div>
               <blockquote>
                  Hazlo simple: tan simple como sea posible, pero no más.
                  <br />
                  <b>— Albert Einstein</b>
               </blockquote>
            </div>
            <div>
               <blockquote>
                  Los programadores de verdad no documentan. Si fue difícil de
                  escribir, debe ser difícil de entender.
                  <br />
                  <b>— Anónimo</b>
               </blockquote>
            </div>
            <div>
               <blockquote>
                  La constancia es la madre de la dominio.
                  <br />
                  <b>— Yony Calsin</b>
               </blockquote>
            </div>
            <div>
               <blockquote>
                  El hardware es aquello a lo que puedes dar patadas. Software
                  es aquello a lo que sólo puedes insultar.
                  <br />
                  <b>— Anónimo</b>
               </blockquote>
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

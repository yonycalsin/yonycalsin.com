import * as React from 'react'
import { graphql } from 'gatsby'

import { HomeLayout } from 'layouts'

export default function Home() {
   return (
      <HomeLayout isStandaloneBrand>
         <div>
            <h1 className="text-center hover:text-red-500">
               <q>Yony Calsin</q>
            </h1>
         </div>

         <div className="text-center break-words">
            <p>
               Soy un desarrollador frontend creando proyectos de código abierto
               y escribiendo sobre JavaScript moderno, Node.js, Typescript y
               Graphql.
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

         <div className="grid grid-cols-2 gap-4">
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
                  Se ha creado el ordenador perfecto. Metes todos tus problemas
                  y ya no vuelven a salir.
                  <br />
                  <b>— Anónimo</b>
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

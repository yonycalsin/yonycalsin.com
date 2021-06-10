import * as React from 'react'

import { Navbar } from 'components'
import LanguagesNav from 'components/navbar/languages-nav'
import NightModeButton from 'components/night-mode-button'

import 'scroll-style/index.css'

type HomeLayoutProps = {
   children: React.ReactNode
   isStandaloneBrand?: boolean
}

export const HomeLayout = (props: HomeLayoutProps) => {
   const { children } = props

   return (
      <>
         <NightModeButton />
         <Navbar />
         <div className="container prose prose-sm">{children}</div>

         <footer className="bg-gray-50 dark:bg-gray-900">
            <div className="container border-t-2 border-gray-100 dark:border-gray-700 lg:mb-20">
               <div className="flex gap-4 flex-col md:flex-row flex-wrap justify-between items-center ">
                  <p>
                     <small>
                        Created By{' '}
                        <i>
                           <b>Yony Calsin</b>
                        </i>{' '}
                     </small>
                  </p>

                  <LanguagesNav />

                  <p>
                     <small>
                        With Gatsby, Typescript, TailwindCss, and Vercel
                     </small>
                  </p>
               </div>
            </div>
         </footer>
      </>
   )
}

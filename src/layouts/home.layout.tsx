import * as React from 'react'

import { Navbar } from 'components'
import LanguagesNav from 'components/navbar/languages-nav'

import 'scroll-style/index.css'

type HomeLayoutProps = {
   children: React.ReactNode
   isStandaloneBrand?: boolean
}

export const HomeLayout = (props: HomeLayoutProps) => {
   const { children } = props

   return (
      <>
         <Navbar />
         <div className="container prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
            {children}
         </div>

         <div className="container sm:prose lg:prose-lg xl:prose-2xl mx-auto border-t-2 border-gray-100 bg-gray-50 lg:mb-20">
            <div className="flex gap-4 flex-col md:flex-row flex-wrap justify-between items-center ">
               <small>
                  Created By{' '}
                  <i>
                     <b>Yony Calsin</b>
                  </i>{' '}
               </small>

               <LanguagesNav />

               <small>With Gatsby, Typescript, TailwindCss, Netlify</small>
            </div>
         </div>
      </>
   )
}

import * as React from 'react'

import { Navbar } from 'components'

import 'scroll-style/index.css'

type HomeLayoutProps = {
   children: React.ReactNode
   isStandaloneBrand?: boolean
}

export const HomeLayout = (props: HomeLayoutProps) => {
   const { children, isStandaloneBrand } = props

   return (
      <>
         <Navbar isStandaloneBrand={isStandaloneBrand} />
         <div className="container prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
            {children}
         </div>

         <div className="container sm:prose lg:prose-lg xl:prose-2xl mx-auto border-t-2 border-gray-100 bg-gray-50 mb-10">
            <div className="flex flex-wrap justify-between items-center ">
               <small>
                  Created By{' '}
                  <i>
                     <b>Yony Calsin</b>
                  </i>{' '}
               </small>

               <small>With Gatsby, Typescript, TailwindCss, Netlify</small>
            </div>
         </div>
      </>
   )
}

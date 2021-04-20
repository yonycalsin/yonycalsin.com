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
      </>
   )
}

import * as React from 'react'

import { Navbar } from 'components'

import 'flexbox-fast/index.css'
import 'scroll-style/index.css'
import 'styles/main.scss'

type HomeLayoutProps = {
   children: React.ReactNode
   isStandaloneBrand?: boolean
}

export const HomeLayout = (props: HomeLayoutProps) => {
   const { children, isStandaloneBrand } = props

   return (
      <>
         <Navbar isStandaloneBrand={isStandaloneBrand} />
         {children}
      </>
   )
}

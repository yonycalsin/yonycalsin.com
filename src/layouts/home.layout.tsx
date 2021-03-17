import * as React from 'react'

import 'styles/main.scss'

type HomeLayoutProps = {
   children: React.ReactNode
}

export const HomeLayout = (props: HomeLayoutProps) => {
   const { children } = props

   return <div>{children}</div>
}

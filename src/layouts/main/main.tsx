import * as React from 'react'

import type { MainLayoutProps } from 'typings/layouts'
import { FloatSocials, PageTransition } from 'components'
import { Footer, Header } from './components'

function MainLayout(props: MainLayoutProps) {
  const { children } = props

  return (
    <>
      <Header />
      <PageTransition>{children}</PageTransition>
      <Footer />
      <FloatSocials />
    </>
  )
}

export default MainLayout

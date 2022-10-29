import * as React from 'react'

import type { MainLayoutProps } from 'typings/layouts'
import { Footer, Navbar } from 'containers'
import { FloatSocials } from 'components'

function MainLayout(props: MainLayoutProps) {
  const { children } = props

  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <FloatSocials />
    </>
  )
}

export default MainLayout

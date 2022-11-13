import * as React from 'react'

import type { MainLayoutProps } from 'typings/layouts'
import { Footer } from 'containers/footer'
import { Navbar } from 'containers/navbar'
import { FloatSocials } from 'components/float-socials'

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

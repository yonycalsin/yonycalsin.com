import * as React from 'react'

import type { MainLayoutProps } from 'typings/layouts'
import { Footer, Navbar } from 'containers'
import { FloatSocials, NightModeButton } from 'components'

function MainLayout(props: MainLayoutProps) {
  const { children } = props

  return (
    <>
      <NightModeButton />
      <Navbar />
      {children}
      <Footer />
      <FloatSocials />
    </>
  )
}

export default MainLayout

import * as React from 'react'

import { FloatSocials } from '~/components'
import NightModeButton from '~/components/night-mode-button'
import { PageTransition } from '~/components/page-transition/page-transition'

import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <>
      <NightModeButton />
      <Header />
      <div className="container">
        <PageTransition>{children}</PageTransition>
      </div>
      <Footer />
      <FloatSocials />
    </>
  )
}

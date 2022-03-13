import * as React from 'react'
import clsx from 'clsx'

import { FloatSocials } from '~/components'
import { NightModeButton } from '~/components/night-mode-button'
import { PageTransition } from '~/components/page-transition/page-transition'

import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'

import s from './home.layout.module.css'

type MainLayoutProps = {
  children: React.ReactNode
}

export const MainLayout = (props: MainLayoutProps) => {
  const { children } = props

  return (
    <>
      <NightModeButton />
      <Header />
      <main className={clsx('container', s.main)}>
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <FloatSocials />
    </>
  )
}

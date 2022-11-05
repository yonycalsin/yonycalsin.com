import 'assets/styles/index.css'
import 'assets/styles/runts.css'
import 'assets/styles/tailwind.css'
import 'prism-theme-vars/base.css'
import 'prism-theme-vars/themes/vitesse-dark.css'
import '@runts/react/styles/editor-fonts.css'
import '@runts/react/styles/runts-playground.css'
import isotipo from 'assets/brand/images/isotipo.png'

import type { AppLayoutProps } from 'typings/app'
import { MainLayout } from 'layouts'

function Layout(props: AppLayoutProps) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href={isotipo.src} type="image/png" />
        <link rel="preload" href="/static/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#F8F7F3] text-gray-800 text-base lg:text-lg">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}

export default Layout
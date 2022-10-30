import 'assets/styles/index.css'
import 'assets/styles/runts.css'
import 'assets/styles/tailwind.css'
import 'prism-theme-vars/base.css'
import 'prism-theme-vars/themes/vitesse-dark.css'
import '@runts/react/styles/editor-fonts.css'
import '@runts/react/styles/runts-playground.css'

import type { AppLayoutProps } from 'typings/app'
import { MainLayout } from 'layouts'

function Layout(props: AppLayoutProps) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <title>Yony Calsin</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link rel="preload" href="/static/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,700&display=swap"
        />
      </head>
      <body className="bg-[#F8F7F3] text-gray-800 text-base lg:text-lg">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}

export default Layout

import 'assets/styles/index.css'
import 'assets/styles/runts.css'
import 'assets/styles/tailwind.css'
import 'prism-theme-vars/base.css'
import 'prism-theme-vars/themes/vitesse-dark.css'
import '@runts/react/styles/editor-fonts.css'
import '@runts/react/styles/runts-playground.css'
import isotipo from 'assets/brand/images/isotipo.png'

import { Inter, Source_Serif_Pro } from '@next/font/google'
import clsx from 'clsx'
import Script from 'next/script'

import type { AppLayoutProps } from 'typings/app'
import { MainLayout } from 'layouts'
import { ENV, IS_PRODUCTION } from 'utils/constants'

const fontInter = Inter({
  subsets: ['greek-ext'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const fontSourceSerifPro = Source_Serif_Pro({
  subsets: ['latin'],
  variable: '--font-source-serif-pro',
  weight: ['200', '300', '400', '600', '700', '900'],
})

function Layout(props: AppLayoutProps) {
  const { children } = props

  return (
    <html lang="en" className={clsx(fontInter.variable, fontSourceSerifPro.variable)}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href={isotipo.src} type="image/png" />
      </head>
      <body className="bg-[#F8F7F3] text-gray-800 text-base lg:text-lg">
        <MainLayout>{children}</MainLayout>
        {IS_PRODUCTION && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${ENV.GOOGLE_ANALYTICS_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                        window.dataLayer = window.dataLayer || [];

                        function gtag(){dataLayer.push(arguments);}

                        gtag('js', new Date());

                        gtag('config', '${ENV.GOOGLE_ANALYTICS_ID}', {
                            page_path: window.location.pathname,
                        });
                    `,
              }}
            />
          </>
        )}
      </body>
    </html>
  )
}

export default Layout

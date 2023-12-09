import 'styles/globals.css'

import * as React from 'react'
import { clsx } from 'clsx'
import { CookieStorage } from 'constants/storage'
import { Inter as FontSans, Inter, Source_Serif_4 } from 'next/font/google'
import { cookies } from 'next/headers'
import Script from 'next/script'

import type { AppLayoutProps } from 'typings/app'
import { VercelInsights } from 'analytics/vercel-insights'
import { MainLayout } from 'layouts'
import { ENV, IS_PRODUCTION } from 'utils/constants'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const fontInter = Inter({
  subsets: ['greek-ext'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const fontSourceSerifPro = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif-pro',
  weight: ['200', '300', '400', '600', '700', '900'],
})

const description =
  'Software Developer creating open source projects and writing on modern JavaScript, Node.js, Typescript and Graphql.'

// Because OG images must have a absolute URL, we use the
// `VERCEL_URL` environment variable to get the deployment’s URL.
// More info:
// https://vercel.com/docs/concepts/projects/environment-variables
const image = `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''}/api/og`

export const metadata = {
  robots: {
    index: false,
    follow: false,
    noimageindex: true,
    indexifembedded: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      indexifembedded: false,
    },
  },
  title: {
    default: 'Yony Calsin - Software Developer',
    template: '%s - Yony Calsin',
  },
  description,
  openGraph: {
    url: 'https://www.yonycalsin.com',
    type: 'website',
    title: 'Yony Calsin - Software Developer',
    description,
    siteName: 'Yony Calsin',
    images: [{ url: image }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yonycalsin',
    title: 'Yony Calsin - Software Developer',
    description,
    images: [{ url: image }],
  },
}

function Layout(props: AppLayoutProps) {
  const { children } = props

  const dark = cookies().get(CookieStorage.DARK)

  return (
    <html
      lang="en"
      className={clsx(fontInter.variable, fontSans.variable, fontSourceSerifPro.variable, dark?.value && 'dark')}
    >
      <body>
        <MainLayout>{children}</MainLayout>
        <VercelInsights />
        {IS_PRODUCTION && ENV.GOOGLE_ANALYTICS_ID ? (
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
        ) : null}

        {ENV.LOGROCKET_APP_ID ? (
          <>
            {/* eslint-disable-next-line @next/next/no-sync-scripts */}
            <script src="https://cdn.lr-intake.com/LogRocket.min.js" crossOrigin="anonymous"></script>
            <script
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `window.LogRocket && window.LogRocket.init('${ENV.LOGROCKET_APP_ID}');`,
              }}
            ></script>
          </>
        ) : null}
      </body>
    </html>
  )
}

export default Layout

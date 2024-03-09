import 'styles/globals.css'

import type { Metadata } from 'next'
import * as React from 'react'
import { clsx } from 'clsx'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import AppProviders from 'providers/app-providers'

import type { AppLayoutProps } from 'typings/app'
import { VercelInsights } from 'analytics/vercel-insights'
import { MainLayout } from 'layouts'
import { ENV, IS_PRODUCTION } from 'utils/constants'

const fontInter = Inter({
  subsets: ['greek-ext'],
  variable: '--font-inter',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const description =
  'Software Developer creating open source projects and writing on modern JavaScript, Node.js, Typescript and Graphql.'

// Because OG images must have a absolute URL, we use the
// `VERCEL_URL` environment variable to get the deployment’s URL.
// More info: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#default-value
const metadataBase =
  process.env.APP_URL ||
  `${process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : `http://localhost:${process.env.PORT || 3000}`}`

export const metadata: Metadata = {
  metadataBase: new URL(metadataBase),
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
  keywords: [
    'yony',
    'Yony',
    'calsin',
    'Calsin',
    'yonycalsin',
    'yonycalsin.com',
    'www.yonycalsin.com',
    'Yony Calsin',
    'Software Engineer',
    'Frontend Engineer',
    'Backend Engineer',
    'Fullstack Engineer',
    'Personal Website',
    'React',
    'Javascript',
    'Typescript',
  ],
  openGraph: {
    url: 'https://www.yonycalsin.com',
    type: 'website',
    title: 'Yony Calsin - Software Developer',
    description,
    siteName: 'Yony Calsin',
    images: [{ url: '/api/og' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@yonycalsin',
    title: 'Yony Calsin - Software Developer',
    description,
    images: [{ url: '/api/og' }],
  },
}

function Layout(props: AppLayoutProps) {
  const { children } = props

  return (
    <html lang="en" className={clsx(fontInter.variable)}>
      <body className="md:text-lg">
        <MainLayout>
          <AppProviders>{children}</AppProviders>
        </MainLayout>
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
      </body>
    </html>
  )
}

export default Layout

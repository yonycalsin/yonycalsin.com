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
import { VercelInsights } from 'analytics/vercel-insights'
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
  icons: {
    icon: isotipo.src,
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

  return (
    <html lang="en" className={clsx(fontInter.variable, fontSourceSerifPro.variable)}>
      <body className="bg-[#F8F7F3] text-gray-800 dark:bg-gray-900 dark:text-gray-300 text-base lg:text-lg">
        <MainLayout>{children}</MainLayout>
        <VercelInsights />
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

import * as React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/static/brand/images/isotipo.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        {/* eslint-disable-next-line @next/next/google-font-display */}
        <link rel="preload" href="/static/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400;1,700&display=swap"
        />
      </Head>
      <body className="bg-[#F8F7F3] text-gray-800 text-base lg:text-lg">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

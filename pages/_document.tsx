import * as React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="preload" href="/static/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body>
        {/* Make Color mode to persists when you refresh the page. */}
        <ColorModeScript />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

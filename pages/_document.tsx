import * as React from 'react'
import { ColorModeScript } from '@chakra-ui/react'
import { Head, Html, Main, NextScript } from 'next/document'

import { mainTheme } from '~/themes/main'
import { isProduction } from '~/utils'
import env from '~/utils/env'

function HeadScripts() {
  const { GOOGLE_ANALYTICS_ID } = env
  return (
    <>
      {GOOGLE_ANALYTICS_ID && (
        <>
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GOOGLE_ANALYTICS_ID}');
                `,
            }}
          />
        </>
      )}
    </>
  )
}

function MyDocument() {
  return (
    <Html>
      <Head>
        {isProduction && <HeadScripts />}
        <link rel="preload" href="/static/fonts/Inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </Head>
      <body>
        <ColorModeScript initialColorMode={mainTheme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

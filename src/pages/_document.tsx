import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
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

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src="https://unpkg.com/@rqbazan/set-initial-color-mode@1.0.1" />
          {isProduction && <HeadScripts />}
        </Head>
        <body className="dark:bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

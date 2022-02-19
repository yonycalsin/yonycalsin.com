import * as React from 'react'
import Document, { DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document'

import { isProduction } from '~/utils'
import { cookieNames } from '~/utils/constants'
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
  static override async getInitialProps(ctx: DocumentContext) {
    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    console.log(ctx.)

    return initialProps
  }

  override render() {
    const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps

    console.log(pageProps)

    return (
      <Html>
        <Head>
          <script
            id="theme-mode-script"
            dangerouslySetInnerHTML={{
              __html: `!function(){"use strict";var e="string"==typeof(e=localStorage.getItem("${cookieNames.THEME_MODE}"))?e:"boolean"==typeof(e=matchMedia("(prefers-color-scheme: dark)")).matches&&e.matches?"dark":"light";"dark"===e?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark"),localStorage.setItem("${cookieNames.THEME_MODE}",e)}();`,
            }}
          />
          {isProduction && <HeadScripts />}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

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

function MyDocument() {
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
      <body className="dark:bg-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default MyDocument

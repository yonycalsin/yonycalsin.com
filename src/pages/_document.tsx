import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <script src="https://unpkg.com/@rqbazan/set-initial-color-mode@1.0.1" />
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

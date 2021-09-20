import type { AppProps } from 'next/dist/shared/lib/router/router'

import 'scroll-style/index.css'
import '~/styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

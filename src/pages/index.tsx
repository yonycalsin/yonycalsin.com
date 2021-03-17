import * as React from 'react'
import { withPrefix } from 'gatsby-link'
import { getUserLangKey } from 'ptz-i18n'

import { i18nConfig } from 'utils/constants'

declare global {
   interface Window {
      ___replace: any
   }
}

class RedirectPage extends React.PureComponent {
   constructor(args) {
      super(args)

      // Skip build, Browsers only
      if (typeof window !== 'undefined') {
         const { languages, defaultLangKey } = i18nConfig

         const langKey = getUserLangKey(languages, defaultLangKey)

         const homeUrl = withPrefix(`/${langKey}/`)

         // I don`t think this is the best solution
         // I would like to use Gatsby Redirects like:
         // https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redirects
         // But Gatsby Redirects are static, they need to be specified at build time,
         // This redirect is dynamic, It needs to know the user browser language.
         // Any ideias? Join the issue: https://github.com/angeloocana/gatsby-starter-default-i18n/issues/4
         window.___replace(homeUrl)
      }
   }

   render() {
      return <div />
   }
}

export default RedirectPage

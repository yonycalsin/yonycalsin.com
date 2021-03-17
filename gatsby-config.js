const path = require('path')

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   /* Your site config here */
   pathPrefix: '.',
   plugins: [
      {
         resolve: 'gatsby-plugin-root-import',
         options: {
            utils: path.join(__dirname, 'src/utils'),
            layouts: path.join(__dirname, 'src/layouts'),
            pages: path.join(__dirname, 'src/pages'),
            types: path.join(__dirname, 'src/types'),
            styles: path.join(__dirname, 'src/styles'),
         },
      },
      {
         resolve: `gatsby-plugin-typescript`,
         options: {
            isTSX: true, // defaults to false
            jsxPragma: `jsx`, // defaults to "React"
            allExtensions: true, // defaults to false
         },
      },
      'gatsby-plugin-sass',
      {
         resolve: 'gatsby-plugin-i18n',
         options: {
            langKeyDefault: 'en',
            langKeyForNull: 'any',
            useLangKeyLayout: true,
         },
      },
   ],
}

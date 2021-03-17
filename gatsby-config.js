/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   /* Your site config here */
   plugins: [
      {
         resolve: `gatsby-plugin-typescript`,
         options: {
            isTSX: true, // defaults to false
            jsxPragma: `jsx`, // defaults to "React"
            allExtensions: true, // defaults to false
         },
      },
   ],
}

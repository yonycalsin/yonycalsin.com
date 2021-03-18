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
            components: path.join(__dirname, 'src/components'),
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
         resolve: `gatsby-source-filesystem`,
         options: {
            path: `${__dirname}/locales`,
            name: `locale`,
         },
      },

      {
         resolve: `gatsby-plugin-react-i18next`,
         options: {
            languages: [`en`, `es`],
            redirect: false,
            localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
            defaultLanguage: `en`,
            // if you are using Helmet, you must include siteUrl, and make sure you add http:https
            siteUrl: 'https://yonycalsin.com/',
            // you can pass any i18next options
            // pass following options to allow message content as a key
            i18nextOptions: {
               lowerCaseLng: true,
               saveMissing: false,
               interpolation: {
                  escapeValue: false,
               },
               keySeparator: '.',
               nsSeparator: false,
            },
            pages: [
               // {
               //    matchPath: '/:lang?/blog/:uid',
               //    getLanguageFromPath: true,
               //    excludeLanguages: ['es'],
               // },
               {
                  matchPath: '/me',
                  languages: ['en', 'es'],
               },
               {
                  matchPath: '/contact',
                  languages: ['en', 'es'],
               },
            ],
         },
      },
   ],
}

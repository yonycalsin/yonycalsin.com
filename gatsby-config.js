const path = require('path')

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
   siteMetadata: {
      title: 'Yony Calsin - Frontend Developer',
      titleTemplate: '%s - Yony Calsin',
      description:
         'Frontend developer creating open source projects and writing on modern JavaScript, Node.js, Typescript and Graphql.',
      url: 'https://www.yonycalsin.com', // No trailing slash allowed!
      twitterUsername: '@yonycalsin',
      socialBannerImage: 'https://avatars.githubusercontent.com/u/58490737?v=4',
   },
   /* Your site config here */
   pathPrefix: '.',
   plugins: [
      {
         resolve: 'gatsby-plugin-google-analytics',
         options: {
            trackingId: 'G-CNJCY1K148',
         },
      },
      'gatsby-plugin-postcss',
      `gatsby-plugin-react-helmet`,
      {
         resolve: 'gatsby-plugin-root-import',
         options: {
            assets: path.join(__dirname, 'src/assets'),
            utils: path.join(__dirname, 'src/utils'),
            layouts: path.join(__dirname, 'src/layouts'),
            pages: path.join(__dirname, 'src/pages'),
            types: path.join(__dirname, 'src/types'),
            styles: path.join(__dirname, 'src/styles'),
            components: path.join(__dirname, 'src/components'),
            icons: path.join(__dirname, 'src/icons'),
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
            languages: [`es`],
            redirect: false,
            localeJsonSourceName: `locale`, // name given to `gatsby-source-filesystem` plugin.
            defaultLanguage: `es`,
            // if you are using Helmet, you must include siteUrl, and make sure you add http:https
            siteUrl: 'https://www.yonycalsin.com',
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
                  // languages: ['en', 'es'],
                  languages: ['es'],
               },
               {
                  matchPath: '/contact',
                  // languages: ['en', 'es'],
                  languages: ['es'],
               },
            ],
         },
      },
   ],
}

const config = {
   siteTitle: 'Greyblu',
   siteTitleShort: 'Greyblu',
   siteTitleAlt: 'Greyblu',
   siteLogo: '/logos/logo-1024.png',
   siteUrl: 'https://www.greyblu.com',
   repo: 'https://github.com/greyblu/greyblu.com',
   pathPrefix: '',
   dateFromFormat: 'YYYY-MM-DD',
   dateFormat: 'MMMM Do, YYYY',
   siteDescription:
      'Yoni Calsin is a front end software developer and writer specializing in modern JavaScript.',
   siteRss: '/rss.xml',
   googleAnalyticsID: 'UA-155262111-2',
   postDefaultCategoryID: 'Tech',
   newsletter: 'https://taniarascia.substack.com',
   newsletterEmbed: 'https://taniarascia.substack.com/embed',
   userName: 'Yoni Calsin',
   userEmail: 'helloyonicb@gmail.com',
   userTwitter: 'yonicalsin',
   menuLinks: [
      {
         name: 'About me',
         link: '/me/',
      },
      {
         name: 'Articles',
         link: '/blog/',
      },
      {
         name: 'Contact',
         link: '/contact/',
      },
   ],
   themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
   backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
   config.pathPrefix = ''
} else {
   // Make sure pathPrefix only contains the first forward slash
   config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
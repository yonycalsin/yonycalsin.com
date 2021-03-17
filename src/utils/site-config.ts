const siteConfig = {
   siteTitle: 'Yony Calsin',
   siteTitleShort: 'YonyCalsin',
   siteTitleAlt: 'Yony Calsin - Desarrollador de Frontend | Frontend Developer',
   siteLogo: '/logos/logo-1024.png',
   siteUrl: 'https://yonycalsin.netlify.app',
   dateFromFormat: 'YYYY-MM-DD',
   dateFormat: 'MMMM Do, YYYY',
   siteDescription:
      'Yony Calsin es un desarrollador de frontend especializado en JavaScript moderno.',
   siteRss: '/rss.xml',
   googleAnalyticsID: null,
   newsletter: 'https://yonycalsin.substack.com',
   newsletterEmbed: 'https://yonycalsin.substack.com/embed',
   userName: 'Yony Calsin',
   userEmail: 'helloyonycalsin@gmail.com',
   userTwitter: 'yonycalsin',
}

// Make sure siteUrl doesn't have an ending forward slash
if (siteConfig.siteUrl.substr(-1) === '/') {
   siteConfig.siteUrl = siteConfig.siteUrl.slice(0, -1)
}

// Make sure siteRss has a starting forward slash
if (siteConfig.siteRss && siteConfig.siteRss[0] !== '/') {
   siteConfig.siteRss = `/${siteConfig.siteRss}`
}

export default siteConfig

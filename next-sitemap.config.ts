/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://al9wel.netlify.app/',
  generateRobotsTxt: true,
  sitemapSize: 1, 
  changefreq: 'monthly', 
  priority: 1.0,
  exclude: [], 
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};

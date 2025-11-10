/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://agilegestaoempresarial.com.br',
  generateRobotsTxt: true,
  exclude: [
    '/api/*',
    '/admin/*',
    '/_next/static/*',
    '/_next/image/*',
    '/*.json',
    '/*.xml',
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
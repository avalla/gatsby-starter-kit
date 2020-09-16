const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Starter Kit`,
    description: ``,
    author: `@avalla`,
    siteUrl: 'https://github.com/avalla/gatsby-starter-kit'
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Starter Kit`,
        short_name: `SK`,
        start_url: `/`,
        background_color: `#1b1b1b`,
        theme_color: `#dddddd`,
        display: `minimal-ui`,
        icon: `src/images/favicon.ico` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`)
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://foo.com',
        sitemap: 'https://foo.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-FOO",
        defer: true,
        cookieDomain: "foo.com",
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        sitemapSize: 5000,
      }
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        https: true,
        www: false,
        DisallowSymLinks: true,
        SymLinksIfOwnerMatch: true,
        host: 'foo.com', // if 'www' is set to 'false', be sure to also remove it here!
        ErrorDocument: `
          ErrorDocument 404 /404.html
        `,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-netlify`,
  ],
}

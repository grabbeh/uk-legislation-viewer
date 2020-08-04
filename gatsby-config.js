module.exports = {
  pathPrefix: `/public`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/markdown`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`
      }
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-react-helmet`
  ]
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Clay: UI/UX Design and Web Services`,
    description: `Website for people`,
    author: `Angga Saputra`,
    image: `src/assets/icons/favicon-logo.png`,
    keyword: `clay-global, clay, web, web services, angga-clay-redesign`,
    siteUrl: `https://clayglobalredesignangga.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
      },
    },
    {
      resolve: "gatsby-plugin-layout",
      options: {
        component: require.resolve("./src/layouts/index.js"),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}

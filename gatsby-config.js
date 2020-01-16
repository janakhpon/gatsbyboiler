module.exports = {
  siteMetadata: {
    title: "JanakhPon's Gatsby Boiler",
    description: "This is the description of janakhpon gatsby boiler",
    author: `@gatsbyjs`,
    keywords: "gatsby, gatsbyjs project, gatsby bootstrap",
    image: "/static/gt.jpg",
    siteUrl: "http://localhost:8000/",
    url: "https://www.gatsbyjs.org/",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    { resolve: `gatsby-transformer-remark` },
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-robots-txt",
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-netlify-cache",
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS Bootstrap`,
        short_name: `GatsbyJS Bootstrap`,
        start_url: `/`,
        background_color: `#F8F9FA`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`
  ],
}

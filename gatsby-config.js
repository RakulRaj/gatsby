module.exports = {
  siteMetadata: {
    title: 'IOWA STATE REGISTRY OF INTERPRETERS FOR THE DEAF',
    description: '',
   // siteUrl: 'https://gatsby-starter.mdbootstrap.com',
    author: 'anna-morawska',

  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
       // apiURL: ""
        apiURL: "https://strapy-iowa.herokuapp.com",
        contentTypes: [
          "Logins",
          "Visions",
          "Navbars",
          "Subnavbars",
          "Homes",
          "Members",
          "Footers",
          "Boards",
          "Events",
        ],
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-svgr`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-material-design-for-bootstrap`,
        short_name: `gatsby`,
        start_url: `/`,
        background_color: `#4B5EB8`,
        theme_color: `#68008C`,
        display: `standalone`,
        icon: `${__dirname}/src/images/Logo_Image.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
     'gatsby-plugin-offline',
  ],
}


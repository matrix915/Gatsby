const dotenv = require("dotenv")
dotenv.config()

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-hubspot-forms`,
      options: {
        apiKey: process.env.GATSBY_HUBSPOT_API_KEY,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: process.env.GATSBY_GOOGLE_ANALYTICS_ID,
      },
    },
    {
      resolve: `gatsby-plugin-hubspot`,
      options: {
        trackingCode: process.env.GATSBY_HUBSPOT_TRACKING_CODE,
        respectDNT: true,
        productionOnly: true,
      },
    },
  ],
}

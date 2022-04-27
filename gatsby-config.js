const dotenv = require("dotenv")
dotenv.config()

/* Your site config here */
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-scroll-reveal`,

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
    // {
    //   resolve: `gatsby-plugin-scroll-reveal`,
    //   options: {
    //       threshold: 1, // Percentage of an element's area that needs to be visible to launch animation
    //       once: true, // Defines if animation needs to be launched once
    //       disable: false, // Flag for disabling animations
          
    //       // Advanced Options
    //       selector: '[data-sal]', // Selector of the elements to be animated
    //       animateClassName: 'sal-animate', // Class name which triggers animation
    //       disabledClassName: 'sal-disabled', // Class name which defines the disabled state
    //       rootMargin: '0% 50%', // Corresponds to root's bounding box margin
    //       enterEventName: 'sal:in', // Enter event name
    //       exitEventName: 'sal:out', // Exit event name
    //   }
    // },
  
  ],
}

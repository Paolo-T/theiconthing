const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
   siteMetadata: {
      title: `Paolo Todde | Senior UI Designer | Coder`,
      siteUrl: `https://todde.design`,
      description: `Specialising in human-centred user experience. Tailored pixel perfect visual design solutions.`,
      author: ``,
      twitterImage: `/images/social/twitter-preview.png`,
      metaOgImage: `/images/social/og-preview.png`,
   },
   flags: { PRESERVE_WEBPACK_CACHE: true },
   plugins: [
      `gatsby-plugin-netlify`,
      `gatsby-plugin-layout`,
      `gatsby-plugin-eslint`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-postcss`,
      `gatsby-plugin-sitemap`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-transformer-json`,
      {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
               "G-LLSGBHM1M0", // Google Analytics / GA4
               "UA-80068675-1", // Google Analytics / GA
            ],
            // This object gets passed directly to the gtag config command
            // This config will be shared across all trackingIds
            gtagConfig: {
               anonymize_ip: true,
               cookie_expires: 0,
            },
            // This object is used for configuration specific to this plugin
            pluginConfig: {
               // Puts tracking script in the head instead of the body
               head: true,
            },
         },
      },
      {
         resolve: `gatsby-plugin-hotjar`,
         options: {
            includeInDevelopment: false, // optional parameter to include script in development
            id: 2084246,
            sv: 6,
         },
      },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `todde.design`,
            short_name: `todde.design`,
            start_url: `/`,
            background_color: fullConfig.theme.colors.white,
            theme_color: fullConfig.theme.colors.white,
            display: `minimal-ui`,
            icon: `src/images/logo.svg`,
         },
      },
      {
         resolve: `gatsby-plugin-postcss`,
         options: {
            postCssPlugins: [
               require(`tailwindcss`)(tailwindConfig),
               require(`autoprefixer`),
               ...(process.env.NODE_ENV === `production` ? [require(`cssnano`)] : []),
            ],
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `projectData`,
            path: `src/projectData/`,
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `images`,
            path: `${__dirname}/src/images/`,
         },
      },
      {
         resolve: "gatsby-plugin-web-font-loader",
         options: {
            custom: {
               families: ["jakarta-sans-title", "Jakarta_sans_body"],
               urls: ["/fonts/fonts.css"],
            },
            // google: {
            //    families: [""],
            // },
         },
      },
   ],
}

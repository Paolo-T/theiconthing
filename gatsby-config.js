const resolveConfig = require("tailwindcss/resolveConfig")
const tailwindConfig = require("./tailwind.config.js")
const fullConfig = resolveConfig(tailwindConfig)

module.exports = {
   siteMetadata: {
      title: `Paolo Todde | Product Designer | Coder`,
      siteUrl: `https://todde.design`,
      description: `UI/product designer Specialising in human-centric user experience. Tailored pixel perfect design solutions.\n\nPassionate advocate for visual communication and great user experience. I collaborate with teams in order to design high quality, accessible interfaces that are human-focused.\n\nDedicated in assisting people in achieving their online goals.`,
      author: `Paolo Todde | Product Designer | Coder`,
      twitterImage: `/images/social/twitter-preview.png`,
      metaOgImage: `/images/social/og-preview.png`,
   },
   plugins: [
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
         resolve: `gatsby-plugin-gdpr-cookies`,
         options: {
            googleAnalytics: {
               trackingId: "UA-80068675-1", // leave empty if you want to disable the tracker
               cookieName: "gatsby-gdpr-google-analytics", // default
               anonymize: true, // default
               allowAdFeatures: false, // default
            },
            hotjar: {
               hjid: "2084246",
               hjsv: "6",
               cookieName: "gatsby-gdpr-hotjar", // default

               // defines the environments where the tracking should be available  - default is ["production"]
               environments: ["production", "development"],
            },
            reactGaOptions: {
               debug: false,
               gaOptions: {
                  sampleRate: 100,
                  siteSpeedSampleRate: 100,
               },
            },
         },
      },
      {
         resolve: `gatsby-plugin-google-gtag`,
         options: {
            // You can add multiple tracking ids and a pageview event will be fired for all of them.
            trackingIds: [
               "G-BD727L80D5", // Google Analytics / GA4
               // "UA-80068675-1", // Google Analytics / GA
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

      // {
      //    resolve: `gatsby-plugin-hotjar`,
      //    options: {
      //       includeInDevelopment: false, // optional parameter to include script in development
      //       id: 2084246,
      //       sv: 6,
      //    },
      // },
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: `todde.design`,
            short_name: `todde.design`,
            start_url: `/`,
            background_color: fullConfig.theme.colors.white,
            theme_color: fullConfig.theme.colors.white,
            display: `minimal-ui`,
            icon: `${__dirname}/src/icons/logo.svg`,
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
         resolve: `gatsby-plugin-layout`,
         options: {
            component: require.resolve(`${__dirname}/src/3_layouts/index.js`),
         },
      },
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `projectData`,
            path: `${__dirname}/src/projectData/`,
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
               families: ["Gilroy_regular", "Gilroy_semibold"],
               urls: ["/fonts/fonts.css"],
            },
         },
      },
      {
         resolve: "gatsby-plugin-react-svg",
         options: {
            rule: {
               include: /icons/,
            },
         },
      },
   ],
}

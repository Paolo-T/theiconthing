import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

function SEO({ description, lang, keywords, title, twitterImage, image }) {
   const { site } = useStaticQuery(graphql`
      query DefaultSEOQuery {
         site {
            siteMetadata {
               title
               description
               author
               twitterImage
               metaOgImage
               siteUrl
            }
         }
      }
   `)
   const url = site.siteMetadata.siteUrl
   const metaDescription = description || site.siteMetadata.description
   const metaTwitterImage = `${url}${twitterImage || site.siteMetadata.twitterImage}`
   const metaOgImage = `${url}${image || site.siteMetadata.metaOgImage}`
   const metaTitle = title || site.siteMetadata.title

   return (
      <Helmet
         htmlAttributes={{
            lang,
         }}
         title={metaTitle}
         defaultTitle={`${site.siteMetadata.title}`}
         // titleTemplate={` %s | ${site.siteMetadata.title}`}
         meta={[
            {
               name: `description`,
               content: metaDescription,
            },
            {
               property: `og:title`,
               content: metaTitle,
            },
            {
               property: `og:description`,
               content: metaDescription,
            },
            {
               property: `og:image`,
               content: metaOgImage,
            },
            {
               property: `og:type`,
               content: `website`,
            },
            {
               name: `twitter:card`,
               content: `summary_large_image`,
            },
            {
               name: `twitter:creator`,
               content: site.siteMetadata.author,
            },
            {
               name: `twitter:title`,
               content: metaTitle,
            },
            {
               name: `twitter:description`,
               content: metaDescription,
            },
            {
               name: `twitter:image:src`,
               content: metaTwitterImage,
            },
         ].concat(
            keywords.length > 0
               ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                 }
               : []
         )}
      />
   )
}

SEO.defaultProps = {
   lang: `en`,
   meta: [],
   description: ``,
   keywords: [],
}

SEO.propTypes = {
   description: PropTypes.string,
   keywords: PropTypes.arrayOf(PropTypes.string),
   lang: PropTypes.string,
   meta: PropTypes.array,
   title: PropTypes.string.isRequired,
}

export default SEO

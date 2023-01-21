import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImgTile from "../1_components/ImgTile"

function Articles() {
   const images = useStaticQuery(graphql`
      query articles {
         atomicDesignImg: file(relativePath: { eq: "articleAtomicDesign/atomic-design_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         userCentredImg: file(relativePath: { eq: "articleUserCentric/user-centric_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   const tilesData = [
      {
         id: "",
         title: "User-centred design",
         description: "",
         img: images.userCentredImg.childImageSharp.gatsbyImageData,
         imgAlt: "Image reppresenting user-centred design",
         linkTo: "article/user-centred-design/",
         hRef: null,
         cta: null,
         isExternal: false,
         isLocked: false,
         isPageNav: false,
      },
      {
         id: "",
         title: "Atomic design",
         description: "",
         img: images.atomicDesignImg.childImageSharp.gatsbyImageData,
         imgAlt: "Image reppresenting atomic design",
         linkTo: "article/atomic-design/",
         hRef: null,
         cta: null,
         isExternal: false,
         isLocked: false,
         isPageNav: false,
      },
   ]

   return (
      <section className="w-full xl:grid grid-cols-16 grid-gap spacing-bottom">
         <div className="col-start-1 md:col-end-17 lg:col-end-14">
            <h2 className="pb-3">What methodologies do I use?</h2>
            <div className="grid sm:grid-cols-2 grid-gap">
               {tilesData.map((tile, i) => (
                  <ImgTile
                     key={i}
                     id={i}
                     hRef={tile.hRef}
                     linkTo={tile.linkTo}
                     title={tile.title}
                     titleSmall={true}
                     description={tile.description}
                     cta={tile.cta}
                     img={tile.img}
                     imgAlt={tile.imgAlt}
                     isPageNav={tile.isPageNav}
                     isExternal={tile.isExternal}
                     isLocked={tile.isLocked}
                     isHorizontal={false}
                     classes={null}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default Articles

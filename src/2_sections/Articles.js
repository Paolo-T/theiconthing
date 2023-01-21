import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImgTile from "../1_components/ImgTile"

function SideProjects() {
   const images = useStaticQuery(graphql`
      query sideProjects {
         digitalArtImg: file(relativePath: { eq: "about/digitalArt_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         digitalArt2Img: file(relativePath: { eq: "about/digitalArt_2_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         threeImg: file(relativePath: { eq: "3dc/3dc_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         photographytImg: file(relativePath: { eq: "about/photography_tile.png" }) {
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
         title: "Artwork on Instagram",
         description: "",
         img: images.digitalArtImg.childImageSharp.gatsbyImageData,
         imgAlt: "Artwork",
         linkTo: false,
         hRef: "https://www.instagram.com/paolo__todde/",
         cta: null,
         isExternal: true,
         isLocked: false,
         isPageNav: false,
      },
      {
         id: "",
         title: "Artwork on Behance",
         description: "",
         img: images.digitalArt2Img.childImageSharp.gatsbyImageData,
         imgAlt: "Artwork",
         linkTo: false,
         hRef: "https://www.behance.net/paolotodde_art",
         cta: null,
         isExternal: true,
         isLocked: false,
         isPageNav: false,
      },
      {
         id: "",
         title: "3dc",
         description: "",
         img: images.threeImg.childImageSharp.gatsbyImageData,
         imgAlt: "Artwork",
         linkTo: "project/3dc/",
         hRef: null,
         cta: null,
         isExternal: false,
         isLocked: false,
         isPageNav: false,
      },
      {
         id: "",
         title: "Photography",
         description: "",
         img: images.photographytImg.childImageSharp.gatsbyImageData,
         imgAlt: "Artwork",
         linkTo: "project/photo/",
         hRef: "https://www.instagram.com/paolo__todde/",
         cta: null,
         isExternal: false,
         isLocked: false,
         isPageNav: false,
      },
   ]

   return (
      <section className="w-full xl:grid grid-cols-16 grid-gap spacing-bottom">
         <div className="col-start-1 md:col-end-17 lg:col-end-14">
            <h2 className="pb-3">Side projects</h2>
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

export default SideProjects

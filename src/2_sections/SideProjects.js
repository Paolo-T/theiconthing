import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ImgTile from "../1_components/ImgTile"

function SideProjects() {
   const images = useStaticQuery(graphql`
      query sideProjects {
         threeImg: file(relativePath: { eq: "3dc/3dc_1.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         digitalArtImg: file(relativePath: { eq: "about/digitalArtThumb.png" }) {
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
         title: "Digital art",
         subTitle: "Illustration",
         cta: "",
         img: images.digitalArtImg.childImageSharp.gatsbyImageData,
         imgAlt: "Artwork",
         linkTo: null,
         hRef: "https://www.instagram.com/paolo__todde/",
         isExternal: true,
         isLocked: false,
      },
      {
         id: "",
         title: "3dc designs",
         subTitle: "Branding",
         cta: "",
         img: images.threeImg.childImageSharp.gatsbyImageData,
         imgAlt: "Artwork",
         linkTo: "projects/3dc/",
         hRef: "https://www.instagram.com/paolo__todde/",
         isExternal: false,
         isLocked: false,
      },
   ]

   return (
      <section className="w-full md:grid grid-cols-16 grid-gap section-spacing">
         <div className="col-span-12">
            <h2 className="text-dark mb-10">Side projects</h2>
            <div className="md:flex grid-gap">
               {tilesData.map((tile, i) => (
                  <ImgTile
                     key={i}
                     classes={"flex-1"}
                     alt={tile.title}
                     loading={"lazy"}
                     img={tile.img}
                     imgAlt={tile.imgAlt}
                     title={tile.title}
                     subTitle={tile.subTitle}
                     cta={tile.cta}
                     label={tile.label}
                     linkTo={tile.linkTo}
                     hRef={tile.hRef}
                     marginTop={tile.marginTop}
                     marginBottom={tile.marginBottom}
                     rounded={false}
                     isPageNav={false}
                     isExternal={tile.isExternal}
                     isLocked={tile.isLocked}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default SideProjects

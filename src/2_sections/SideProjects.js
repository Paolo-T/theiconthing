import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImgTile from "../1_components/ImgTile"

function SideProjects() {
   const images = useStaticQuery(graphql`
      query sideProjects {
         threeImg: file(relativePath: { eq: "3dc/3dc_tile.png" }) {
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
         title: "Artwork",
         description: "",
         img: images.digitalArtImg.childImageSharp.gatsbyImageData,
         imgAlt: "Artwork",
         linkTo: false,
         hRef: "https://www.instagram.com/paolo__todde/",
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
         linkTo: "projects/3dc/",
         hRef: "https://www.instagram.com/paolo__todde/",
         isExternal: false,
         isLocked: false,
         isPageNav: false,
      },
   ]

   return (
      <section className="w-full md:grid grid-cols-16 grid-gap spacing-bottom">
         <div className="col-start-1 md:col-end-17 lg:col-end-13">
            <h2>Side projects</h2>
            <div className="flex flex-col md:flex-row grid-gap">
               {tilesData.map((tile, i) => (
                  <ImgTile
                     key={i}
                     id={i}
                     hRef={tile.hRef}
                     linkTo={tile.linkTo}
                     title={tile.title}
                     titleSmall={true}
                     description={tile.description}
                     img={tile.img}
                     imgAlt={tile.imgAlt}
                     isPageNav={tile.isPageNav}
                     isExternal={tile.isExternal}
                     isLocked={tile.isLocked}
                     isHorizontal={false}
                     classes={""}
                  />
               ))}
            </div>
         </div>
      </section>
   )
}

export default SideProjects

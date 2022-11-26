import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import TransitionInview from "../1_components/TransitionInview"
import ImgTile from "../1_components/ImgTile"

function SideProjects() {
   const images = useStaticQuery(graphql`
      query sideProjects {
         threeImg: file(relativePath: { eq: "three/three_1.png" }) {
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
         label: "",
         title: "Digital art",
         subTitle: "Illustration",
         cta: "",
         img: images.digitalArtImg.childImageSharp.gatsbyImageData,
         id: "",
         // linkTo: "",
         hRef: "https://www.instagram.com/paolo__todde/",
         imgAlt: "",
         isExternal: true,
         isLocked: false,
      },
      {
         label: "",
         title: "3dc designs",
         subTitle: "Branding",
         cta: "",
         img: images.threeImg.childImageSharp.gatsbyImageData,
         id: "",
         linkTo: "/three/",
         // hRef: "",
         imgAlt: "",
         isExternal: false,
         isLocked: false,
      },
   ]
   console.log(tilesData)
   return (
      <section className="w-full bg-white py-16 md:py-60">
         <div className="container">
            <h2 className="text-dark mb-10">Side projects</h2>
            <div className="grid md:grid-cols-2 gap-12">
               {tilesData.map((tile, i) => (
                  <ImgTile
                     key={i}
                     className={`w-60`}
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

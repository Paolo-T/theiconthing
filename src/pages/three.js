import React from "react"
import SEO from "../1_components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../1_components/TransitionPageIn"
import ImgTiles from "../2_sections/ImgTiles"

function Three() {
   const imageData = useStaticQuery(graphql`
      query threeImages {
         threeImages: allFile(filter: { relativeDirectory: { eq: "three" } }) {
            nodes {
               id
               childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
               }
            }
         }
      }
   `)
   console.log(imageData.threeImages.nodes)

   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `UX Design`,
               `User Experience`,
               `Web Design`,
               `Product Design`,
               `Portfolio`,
               `Brighton`,
               `UK`,
            ]}
            title="Paolo Todde | Three"
         />
         <section className="pt-24 sm:pt-28 md:pt-32 mb-0 md:mb-24 container">
            <div className="page-header mb-6">
               <h1 className="h1-page w-full text-dark">3DC</h1>
               <p className="text-xl md:text-2xl text-grey mb-2">Visual brand</p>
            </div>

            {imageData.threeImages.nodes.map((image, i) => (
               <GatsbyImage image={image.childImageSharp.gatsbyImageData} key={i} loading="eager" alt="Project" />
            ))}

            {/* <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/three_design_company/">
               <div className="-m-0.5 pb-20 text-center" style={{ backgroundColor: "#f7f7f7" }}>
                  <h2 className="xlg:inline-block sm:text-2xl lg:text-4xl text-dark ease-in-out mb-3 underline w-10/12 md:w-8/12 mx-auto ">
                     Instagram
                  </h2>
               </div>
            </a> */}
         </section>
         <div className="pt-20">
            <ImgTiles isPageNav={true} />
         </div>
      </>
   )
}

export default Three

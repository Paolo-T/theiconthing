import React from "react"
import SEO from "../1_components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../1_components/TransitionPageIn"
import ImgTiles from "../2_sections/ImgTiles"

function Three() {
   const imageData = useStaticQuery(graphql`
      query threeImages {
         threeImages: allFile(filter: { relativeDirectory: { eq: "three" } }, sort: { order: ASC, fields: name }) {
            nodes {
               id
               childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
               }
            }
         }
      }
   `)

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
         <section className="w-screen bg-white">
            <div className="pt-10 sm:pt-32 md:pt-24">
               <TransitionPageIn>
                  <div className="container page-header">
                     <h1 className="h1-page text-dark">3DC</h1>
                     <p className="text-2xl text-grey md:text-2xl mb-2 md:pl-5">Visual brand</p>
                  </div>

                  {imageData.threeImages.nodes.map((image) => (
                     <GatsbyImage
                        image={image.childImageSharp.gatsbyImageData}
                        key={image.id}
                        loading="eager"
                        alt="Project"
                        className="-m-0.5"
                     />
                  ))}

                  <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/three_design_company/">
                     <div className="-m-0.5 pb-20 text-center" style={{ backgroundColor: "#f7f7f7" }}>
                        <h2 className="xlg:inline-block sm:text-2xl lg:text-4xl text-dark ease-in-out mb-3 underline w-10/12 md:w-8/12 mx-auto ">
                           Instagram
                        </h2>
                     </div>
                  </a>
               </TransitionPageIn>

               <div className="pt-20">
                  <ImgTiles isPageNav={true} />
               </div>
            </div>
         </section>
      </>
   )
}

export default Three

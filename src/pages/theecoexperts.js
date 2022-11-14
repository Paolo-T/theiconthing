import React from "react"
import SEO from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import TransitionPageIn from "../components/TransitionPageIn"
import { GatsbyImage } from "gatsby-plugin-image"
import ImgTiles from "../sections/ImgTiles"

function theecoexperts() {
   const ImageData = useStaticQuery(graphql`
      {
         theEcoExperts_1: file(relativePath: { eq: "theEcoExperts/theEcoExperts_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         theEcoExperts_2: file(relativePath: { eq: "theEcoExperts/theEcoExperts_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         theEcoExperts_3: file(relativePath: { eq: "theEcoExperts/theEcoExperts_3.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         theEcoExperts_4: file(relativePath: { eq: "theEcoExperts/theEcoExperts_4.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         theEcoExperts_5: file(relativePath: { eq: "theEcoExperts/theEcoExperts_5.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         theEcoExperts_6: file(relativePath: { eq: "theEcoExperts/theEcoExperts_6.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         theEcoExperts_7: file(relativePath: { eq: "theEcoExperts/theEcoExperts_7.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
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
            title="Paolo Todde | theecoexperts"
         />

         <section className="w-screen bg-white">
            <div className="pt-10 sm:pt-32 md:pt-32">
               <TransitionPageIn>
                  <div className="container page-header pt-10 ">
                     <h1 className="h1-page text-dark block ">The Eco Experts</h1>
                     <p className="text-2xl text-grey md:text-2xl mb-2 md:pl-5">Home page redesign (WIP)</p>
                  </div>

                  <GatsbyImage
                     image={ImageData.theEcoExperts_1.childImageSharp.gatsbyImageData}
                     className="container mb-32"
                     alt="theecoexperts app presentation"
                     loading="eager"
                  />

                  <div className="px-0 md:px-50">
                     <GatsbyImage
                        image={ImageData.theEcoExperts_2.childImageSharp.gatsbyImageData}
                        alt="theecoexperts app presentation"
                        loading="eager"
                     />

                     <GatsbyImage
                        image={ImageData.theEcoExperts_3.childImageSharp.gatsbyImageData}
                        alt="theecoexperts app presentation"
                        loading="eager"
                     />
                     <GatsbyImage
                        image={ImageData.theEcoExperts_4.childImageSharp.gatsbyImageData}
                        alt="theecoexperts app presentation"
                        loading="eager"
                     />

                     <GatsbyImage
                        image={ImageData.theEcoExperts_5.childImageSharp.gatsbyImageData}
                        alt="theecoexperts app presentation"
                        loading="eager"
                     />
                     <GatsbyImage
                        image={ImageData.theEcoExperts_6.childImageSharp.gatsbyImageData}
                        alt="theecoexperts app presentation"
                        loading="eager"
                     />

                     {/* <GatsbyImage
                        image={ImageData.theEcoExperts_7.childImageSharp.gatsbyImageData}
                        alt="theecoexperts app presentation"
                        loading="eager"
                     /> */}
                  </div>

                  <ImgTiles isPageNav={true} />
               </TransitionPageIn>
            </div>
         </section>
      </>
   )
}

export default theecoexperts

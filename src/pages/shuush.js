import React from "react"
import SEO from "../1_components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../1_components/TransitionPageIn"
import ImgTiles from "../2_sections/ImgTiles"

function Shuush() {
   const imageData = useStaticQuery(graphql`
      {
         shuushImg_0: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_1: file(relativePath: { eq: "shuush/shuush_1.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_2: file(relativePath: { eq: "shuush/shuush_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_3: file(relativePath: { eq: "shuush/shuush_3.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_4: file(relativePath: { eq: "shuush/shuush_4.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_5: file(relativePath: { eq: "shuush/shuush_5.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_6: file(relativePath: { eq: "shuush/shuush_6.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg_7: file(relativePath: { eq: "shuush/shuush_7.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   const imagesBottom = [
      imageData.shuushImg_2.childImageSharp.gatsbyImageData,
      imageData.shuushImg_3.childImageSharp.gatsbyImageData,
      imageData.shuushImg_4.childImageSharp.gatsbyImageData,
   ]

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
            title="Paolo Todde | Shuush"
         />
         <section className="w-screen bg-white">
            <div className="pt-10 sm:pt-32 md:pt-32">
               <TransitionPageIn>
                  <div className="container page-header">
                     <h1 className="h1-page text-dark">Shuush</h1>
                     <p className="text-2xl md:text-2xl mb-2 md:pl-5">Minimalist messaging app concept</p>
                  </div>

                  <GatsbyImage image={imageData.shuushImg_0.childImageSharp.gatsbyImageData} loading="eager" />

                  <section className="py-12 md:py-32 bg-white text-dark">
                     <div className="container grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                        {/* Paragraph */}
                        <div className="hidden md:block col-start-2 col-end-4 md:mt-14">
                           <h4 className="mb-2">Overview</h4>
                           <p>Messaging app</p>
                        </div>
                        <div className="md:mt-0 col-start-5 col-end-11">
                           <h3 className="">Overview</h3>
                           <p>
                              Shuush! is a fun messaging app, with a minimalist User interface. Its fresh and friendly
                              design will help you keeping in contact with your loved ones. The simple and intuitive
                              user interface will facilitate communications and sharing.
                           </p>
                        </div>
                     </div>
                  </section>

                  <div className="container py-14">
                     {imagesBottom.map((image) => (
                        <GatsbyImage image={image} key={image.id} loading="eager" alt="App screen" />
                     ))}
                  </div>

                  <GatsbyImage
                     image={imageData.shuushImg_5.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                     className="container mx-auto py-10 md:py-32 bg-white"
                  />

                  <GatsbyImage
                     image={imageData.shuushImg_1.childImageSharp.gatsbyImageData}
                     loading="eager"
                     alt="App screen"
                     className="container bg-white"
                  />

                  <ImgTiles isPageNav={true} />
               </TransitionPageIn>
            </div>
         </section>
      </>
   )
}

export default Shuush

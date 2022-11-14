import React from "react"
import SEO from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../components/TransitionPageIn"
import ImgTiles from "../sections/ImgTiles"

function BuzzSumo() {
   const imageData = useStaticQuery(graphql`
      {
         heroImg: file(relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         buzzsumoImages: allFile(
            filter: { relativeDirectory: { eq: "buzzsumo/blog" } }
            sort: { fields: absolutePath }
         ) {
            nodes {
               id
               childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
               }
            }
         }
         gridImg: file(relativePath: { eq: "buzzsumo/buzzsumo_blog-grid.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         pricingImg: file(relativePath: { eq: "buzzsumo/buzzsumo_pricing.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         blogTiles: file(relativePath: { eq: "buzzsumo/buzzsumo_blog-tiles.png" }) {
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
            title="Paolo Todde | BuzzSumo"
         />
         <section className="w-screen bg-white">
            <div className="pt-10 sm:pt-32 md:pt-32">
               <TransitionPageIn>
                  <div className="container page-header">
                     <h1 className="h1-pag text-dark">BuzzSumo</h1>
                     <p className="text-2xl text-grey md:text-2xl mb-2 md:pl-5">Web design / Branding</p>
                  </div>

                  <GatsbyImage
                     image={imageData.heroImg.childImageSharp.gatsbyImageData}
                     className="container"
                     loading="eager"
                     alt="Buzzsumo app presentation"
                  />

                  <section className="w-full bg-white text-dark">
                     <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0 md:py-32">
                        {/* Paragraph */}
                        <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                           <h4 className="mb-2 mt-2 text-grey">Skills applied</h4>
                           <p className="text-grey">
                              Web Design
                              <br />
                              Branding
                           </p>
                        </div>
                        <div className="mt-10 md:mt-0 col-start-5 col-end-11">
                           <h3>Overview</h3>
                           <p>
                              BuzzSumo is a powerful platform that allows you to find engaging pieces of content and
                              discover new potential outreach opportunities. The site allows you to search for content
                              that has received the most shares, links and comments.
                           </p>
                        </div>
                     </div>

                     <GatsbyImage
                        image={imageData.blogTiles.childImageSharp.gatsbyImageData}
                        loading="eager"
                        alt="App screen"
                        className="md:pt-20 mb-8 md:mb-20 md:pb-8"
                     />

                     <GatsbyImage
                        image={imageData.pricingImg.childImageSharp.gatsbyImageData}
                        loading="eager"
                        alt="Buzzsumo pricing page"
                     />
                  </section>

                  <section className="w-full bg-white text-dark">
                     <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0 md:py-32">
                        {/* Paragraph */}
                        <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                           <h4 className="mb-2 mt-2 text-grey">Skills applied</h4>
                           <p className="text-grey">
                              Branding
                              <br /> Photo manipulation
                           </p>
                        </div>
                        <div className="mt-10 md:mt-0 col-start-5 col-end-10">
                           <h3>Blog header images</h3>
                           <p>
                              <p>
                                 Visual identity application to the blog header images section. Creating blog header
                                 using a coherent branding language to carry across the visual identity.
                              </p>
                           </p>
                        </div>
                     </div>
                  </section>

                  <div className="w-full bg-white py-20">
                     <div className="container grid grid-cols-3 gap-3 md:gap-6">
                        {imageData.buzzsumoImages.nodes.map((image) => (
                           <GatsbyImage
                              image={image.childImageSharp.gatsbyImageData}
                              key={image.id}
                              className=""
                              loading="eager"
                              alt="Buzzsumo images"
                           />
                        ))}
                     </div>
                  </div>

                  <ImgTiles isPageNav={true} />
               </TransitionPageIn>
            </div>
         </section>
      </>
   )
}

export default BuzzSumo

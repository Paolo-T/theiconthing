import React from "react"
import SEO from "../1_components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import TransitionPageIn from "../1_components/TransitionPageIn"
import ImgTiles from "../2_sections/ImgTiles"

function spaceDigest() {
   const data = useStaticQuery(graphql`
      {
         spaceDigestImg_1: file(relativePath: { eq: "spaceDigest/spaceDigest_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         spaceDigestImg_2: file(relativePath: { eq: "spaceDigest/spaceDigest_0.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         spaceDigestImg_3: file(relativePath: { eq: "spaceDigest/spaceDigest_1.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         spaceDigestImg_4: file(relativePath: { eq: "spaceDigest/spaceDigest_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         spaceDigestImg_5: file(relativePath: { eq: "spaceDigest/spaceDigest_3.png" }) {
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
            title="Portfolio page classica App"
         />
         <div className="w-12/12 mx-auto">
            <TransitionPageIn>
               <GatsbyImage
                  image={data.spaceDigestImg_1.childImageSharp.gatsbyImageData}
                  className="max-w-screen-xxl mx-auto bg-dark"
                  loading="eager"
               />
               <div className="w-full bg-white mx-auto pb-10 md:pb-40 md:pt-32">
                  <section className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-8/12 max-w-screen-xl mx-auto text-dark">
                     <div className="grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-14 gap-x-0">
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Overview</h4>
                           <h4 className="text-sm">Website</h4>
                        </div>
                        <div className="col-start-5 col-end-11">
                           <h3 className="mt-10 md:mt-0 font-sansTitle text-3xl mb-3 md:mb-4">Overview</h3>
                           <p>
                              <span className="font-sansTitle">Space Digest</span> is an informative web resource for
                              the passionate about space and space technology.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Design</h4>
                        </div>
                        <div className="col-start-5 col-end-11">
                           <h3 className="font-sansTitle text-3xl mb-3 md:mb-4">Design</h3>
                           <p>
                              The design is simple and accessible. The UI is designed to facilitate the displaying of
                              data information.
                           </p>
                        </div>
                        {/* Paragraph */}
                        <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                           <h4 className="font-sansTitle text-sm uppercase tracking-widest">Development</h4>
                        </div>
                        <div className="col-start-5 col-end-11">
                           <h3 className="font-sansTitle text-3xl mb-3 md:mb-4">Development</h3>
                           <p>
                              It was developed using the Jam stack. Gatsby.js, React.js and deployed on Netlify. It
                              consumes data from the Nasa and SpaceX open APIS
                           </p>
                        </div>
                        {/* Paragraph */}
                        {/* <div className="hidden md:block md:mt-14 col-start-1 col-end-4">
                        <h4 className="font-sansTitle text-sm uppercase tracking-widest">Website</h4>
                     </div>
                     <div className="col-start-5 col-end-11">
                        <h2 className="font-sansTitle text-3xl mb-3 md:mb-4">Visit the website</h2>
                        <a
                           href="https://spacedigest.live"
                           target="_blank"
                           className="underline hover:text-primary text-2xl mt-2"
                        >
                           www.spacedigest.live
                        </a>
                     </div> */}
                     </div>
                  </section>

                  <section className="w-11/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-xl mx-auto mt-12 md:mt-20">
                     <div className="grid grid-cols-2 gap-x-5 md:gap-x-10 gap-y-10 md:gap-y-20">
                        <GatsbyImage
                           image={data.spaceDigestImg_2.childImageSharp.gatsbyImageData}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                        <GatsbyImage
                           image={data.spaceDigestImg_3.childImageSharp.gatsbyImageData}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                        <GatsbyImage
                           image={data.spaceDigestImg_4.childImageSharp.gatsbyImageData}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                        <GatsbyImage
                           image={data.spaceDigestImg_5.childImageSharp.gatsbyImageData}
                           className="flex-1 shadow-lg"
                           loading="eager"
                           alt="App screen"
                        />
                     </div>
                  </section>
               </div>

               <div className="w-10/12 md:w-8/12 lg:w-8/12 xl:w-7/12 max-w-screen-xl mx-auto">
                  <ImgTiles isPageNav={true} />
               </div>
            </TransitionPageIn>
         </div>
      </>
   )
}

export default spaceDigest

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function About() {
   const data = useStaticQuery(graphql`
      query aboutImages {
         profileImg: file(relativePath: { eq: "about/profile-img.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   return (
      <section className="w-full py-20 md:py-64 bg-gradient-to-b from-zinc-900 to-dark">
         <div id="about" className="relative container">
            <div className="relative lg:flex items-center px-0 md:px-8">
               <div className="relative w-6/12 h-1/4 sm:w-8/12 md:w-3/12 xl:w-3/12 mx-auto  ">
                  <span
                     className="inline-block absolute h-full w-full md:-top-30 left-0 md:left-0 lg:left-0
                  rounded-full
                  bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800
                  animate-pulse
                  "
                  ></span>

                  <GatsbyImage
                     image={data.profileImg.childImageSharp.gatsbyImageData}
                     alt="illustration"
                     className="rounded-full"
                     loading="eager"
                  />
               </div>

               <div className="w-full lg:w-7/12 md:pl-10 xl:pl-0 mt-10 lg:mt-0 md:pr-10 xl:pr-20">
                  <h2 className="mb-5">Hey there</h2>
                  <p className="mt-2">
                     I am a designer specializing in web and mobile experiences. Passionate about visual communication,
                     creating and developing well crafted designs, user focused utilitarian interfaces. Contributing to
                     the web ecosystem to create meaningful human experiences.
                     <br></br>
                     <br></br>
                     Currently designing with&nbsp;
                     <a
                        className="cursor-pointer underline underline-offset-4 decoration-1  hover:text-grey transition duration-300"
                        rel="noopener noreferrer"
                        href="https://www.johnlewis.com/"
                        target="_blank"
                     >
                        John Lewis & Partners
                     </a>
                     &nbsp;and&nbsp; jury member at&nbsp;
                     <a
                        className="cursor-pointer underline underline-offset-4 decoration-1  hover:text-grey transition duration-300"
                        rel="noopener noreferrer"
                        href="https://www.cssdesignawards.com/"
                        target="_blank"
                     >
                        CSS Design Awards
                     </a>
                     .
                  </p>

                  <h4 className="mt-16 mb-4 text-grey">Focusing on:</h4>
                  <ul className="md:flex text-5xl justify-between pr-10">
                     <li>UX/UI</li>
                     <li>Interaction & Motion</li>
                     <li>Design Systems</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About

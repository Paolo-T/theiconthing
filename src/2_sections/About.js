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
      <section className="lg:grid grid-cols-16 grid-gap spacing-top spacing-bottom text-offWhite ">
         <div className="col-start-1 col-end-13">
            <div
               id="about"
               className="flex flex-col lg:flex-row items-center px-6 md:px-20 border border-offWhite py-10 md:py-20"
            >
               <div className="relative col-span-12 w-6/12 sm:w-4/12 md:w-3/12 xl:w-3/12 h-1/2 mb-10">
                  <span
                     className="absolute h-full w-full rounded-full

                        bg-gradient-to-r from-offWhite/20 to-offWhite/60
                        animate-pulse
                        "
                  ></span>

                  <GatsbyImage
                     image={data.profileImg.childImageSharp.gatsbyImageData}
                     alt="illustration"
                     className="rounded-full border border-offWhite"
                     loading="eager"
                  />
               </div>

               <div className="flex-1 md:pl-20 mt-0">
                  <h2 className="text-primary uppercase">Hey there!</h2>
                  <p>
                     I'm Paolo, a UI/product designer Specialising in human-centric user experience. Tailored pixel
                     perfect design solutions.<br></br>
                     <br></br>Passionate advocate for visual communication and great user experience. I collaborate with
                     teams in order to design high quality, accessible interfaces that are human-focused.<br></br>
                     <br></br>Dedicated in assisting people in achieving their online goals.<br></br>
                     <br></br>Currently designing with&nbsp;
                     <a
                        className="cursor-pointer underline underline-offset-4 decoration-1 hover:text-grey transition duration-300"
                        rel="noopener noreferrer"
                        href="https://www.johnlewis.com/"
                        target="_blank"
                     >
                        John Lewis & Partners
                     </a>
                     &nbsp;and&nbsp; jury member at&nbsp;
                     <a
                        className="cursor-pointer underline underline-offset-4 decoration-1 hover:text-grey transition duration-300"
                        rel="noopener noreferrer"
                        href="https://www.cssdesignawards.com/"
                        target="_blank"
                     >
                        CSS Design Awards
                     </a>
                     .
                  </p>

                  <h4 className="mt-16 mb-4 text-primary">Passionate about:</h4>
                  <ul className="md:flex text-5xl justify-between pr-8">
                     <li>UX/UI</li>
                     <li>Interaction and Motion</li>
                     <li>Design Systems</li>
                  </ul>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About

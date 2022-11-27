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
      <section className="w-full bg-primary">
         <div id="about" className="flex items-center container-content bg-dark py-20">
            <div className="relative w-6/12 sm:w-8/12 md:w-3/12 xl:w-3/12 h-1/2 mx-16">
               <span
                  className="absolute h-full w-full rounded-full

                  bg-gradient-to-r from-primary/40 to-primary
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

            <div className="flex-1 text-white pr-16">
               <h2 className="mb-5 uppercase">Hey there!</h2>
               <p className="mt-2">
                  I am a designer specializing in web and mobile experiences. Passionate about visual communication,
                  creating and developing well crafted designs, user focused utilitarian interfaces. Contributing to the
                  web ecosystem to create meaningful human experiences.<br></br>
                  <br></br>Currently designing with&nbsp;
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
      </section>
   )
}

export default About

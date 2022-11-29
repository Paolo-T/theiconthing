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
      <section
         id="about"
         className="md:container-content flex flex-col lg:flex-row items-center space-y-10 px-6 md:px-10 bg-dark py-10 md:py-20"
      >
         <div className="relative w-6/12 sm:w-8/12 md:w-3/12 xl:w-3/12 h-1/2 md:mx-20">
            <span
               className="absolute h-full w-full rounded-full

                  bg-gradient-to-r from-offWhite/20 to-offWhite/60
                  animate-pulse
                  "
            ></span>

            <GatsbyImage
               image={data.profileImg.childImageSharp.gatsbyImageData}
               alt="illustration"
               className="rounded-full border-2 border-offWhite"
               loading="eager"
            />
         </div>

         <div className="flex-1 text-offWhite md:pr-16">
            <h2 className="text-primary mb-5 uppercase">Hey there!</h2>
            <p className="mt-2">
               I'm Paolo. A product designer specialising in web and mobile experiences. Passionate about visual
               communication, striving to design high quality user focused utilitarian interfaces.<br></br>
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
               <li>Interaction & Motion</li>
               <li>Design Systems</li>
            </ul>
         </div>
      </section>
   )
}

export default About

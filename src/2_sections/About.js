import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import IconArrow from "../icons/arrow.svg"

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
      <section className="xl:grid grid-cols-16 grid-gap spacing-top spacing-bottom text-offWhite ">
         <div className="col-start-1 col-end-14">
            <div
               id="about"
               className="flex flex-col lg:flex-row items-center px-6 md:px-20 border border-offWhite rounded-xl py-10 md:py-20"
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
                  <h2 className="text-primary uppercase">Hey there, Welcome!</h2>
                  <p>
                     I'm Paolo, skilled digital product designer with a focus on UI design. I have a strong
                     understanding of user-centered design principles and am able to create intuitive and visually
                     appealing interfaces that are easy to use and understand. Proficient in various design tools such
                     as Figma, Sketch, and Adobe XD, and have experience working on both web and mobile applications.
                     <br></br>Well-versed in responsive design, ensuring that the user experience is consistent across
                     different devices. I am a a strong collaborator and enjoy working with cross-functional teams and
                     am able to effectively communicate my design decisions and rationale to stakeholders.<br></br>
                     Always looking for ways to improve the user experience and am constantly staying up-to-date with
                     the latest design trends and best practices.<br></br>Dedicated in assisting people in achieving
                     their online goals.
                     <br></br>
                     <br></br>Currently designing with&nbsp;
                     <a
                        className="cursor-pointer underlined hover:text-grey transition duration-300"
                        rel="noopener noreferrer"
                        href="https://www.johnlewis.com/"
                        target="_blank"
                     >
                        John Lewis & Partners
                     </a>
                     &nbsp;and&nbsp; jury member at&nbsp;
                     <a
                        className="cursor-pointer underlined hover:text-grey transition duration-300"
                        rel="noopener noreferrer"
                        href="https://www.cssdesignawards.com/"
                        target="_blank"
                     >
                        CSS Design Awards
                     </a>
                     .
                  </p>

                  <div className="mb-16">
                     <h4 className="mt-16 mb-4 text-primary">I'm passionate about:</h4>
                     <ul className="md:flex text-5xl justify-between pr-8">
                        <li>UX/UI</li>
                        <li>Interaction and Motion</li>
                        <li>Design Systems</li>
                     </ul>
                  </div>

                  <div className="flex items-baseline space-x-3 text-left">
                     <IconArrow className="rotate-90 text-primary" />
                     <a
                        className="container flex-1 underlined
                  transition duration-100 ease-in-out dark-text-hover"
                        type="button"
                        rel="noopener noreferrer"
                        target="_blank"
                        href="mailto:room01info@gmail.com"
                     >
                        {" "}
                        <h4>Send me a message</h4>
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   )
}

export default About

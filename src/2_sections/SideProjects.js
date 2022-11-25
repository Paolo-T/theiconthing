import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function SideProjects() {
   const data = useStaticQuery(graphql`
      query sideProjects {
         threeImg: file(relativePath: { eq: "three/three_1.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         digitalArtImg: file(relativePath: { eq: "about/digitalArtThumb.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   return (
      <section className="w-full bg-white py-16 md:pb-36 md:pt-32">
         <div className="container">
            <h2 className="text-dark mb-0 md:mb-8">Side projects</h2>
            <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-14">
               <div className="flex-1">
                  <div className="relative group w-full transition duration-500 transform overflow-hidden">
                     <a href="https://www.instagram.com/paolo__todde/" target="_blank">
                        <GatsbyImage
                           image={data.digitalArtImg.childImageSharp.gatsbyImageData}
                           alt="Digital Art"
                           loading="eager"
                           className="overflow-hidden transition duration-500 transform cursor-pointer group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"
                        />
                     </a>
                  </div>
                  <h4 className="mt-4 text-grey">Digital Art</h4>
               </div>
               <div className="flex-1">
                  <div className="relative group w-full transition duration-500 transform overflow-hidden">
                     <Link to="/three/" target="_blank">
                        <GatsbyImage
                           image={data.threeImg.childImageSharp.gatsbyImageData}
                           alt="3dc designs"
                           className="overflow-hidden transition duration-500 transform cursor-pointer group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"
                           loading="eager"
                        />
                     </Link>
                  </div>
                  <h4 className="mt-4 text-grey">3DC</h4>
               </div>
            </div>
         </div>
      </section>
   )
}

export default SideProjects

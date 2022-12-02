import React from "react"
import SEO from "../1_components/Seo"
import { Link } from "gatsby"
import TransitionPageIn from "../1_components/TransitionPageIn"
import { GatsbyImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import IconArrow from "../icons/arrow.svg"

export default function NotFoundPage() {
   const data = useStaticQuery(graphql`
      {
         fourofourImg: file(relativePath: { eq: "404/404.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)
   const featuredImg = data.fourofourImg.childImageSharp.gatsbyImageData

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
            title="404: Not found"
         />
         <TransitionPageIn>
            <section className="w-full bg-offWhite py-32 md:py-56">
               <div className="container grid grid-cols-16 grid-gap content-center">
                  <div className="col-start-1 col-end-17 md:col-end-9 order-last md:oder-first">
                     <GatsbyImage className="mb-2" image={featuredImg} alt="Image" loading={"eager"} />
                     <div>
                        <span> Photo by</span>{" "}
                        <a
                           rel="noopener noreferrer"
                           target="_blank"
                           href="https://unsplash.com/es/@garrettsears?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                           Garrett Sears
                        </a>{" "}
                        <span> on</span>{" "}
                        <a
                           rel="noopener noreferrer"
                           target="_blank"
                           href="https://unsplash.com/s/photos/lost?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                        >
                           Unsplash
                        </a>
                     </div>
                  </div>
                  <div className="col-start-1 md:col-start-9 col-end-17 md:pt-40 order-first md:order-last">
                     <h1 className=" font-hero mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                        {" "}
                        Looks like the page you are looking for is not here...
                     </h1>
                     <div className="flex items-baseline space-x-3">
                        <IconArrow className="rotate-90 text-primary" />

                        <Link
                           className="container flex-1 underline underline-offset-4
                  transition duration-100 ease-in-out dark-text-hover"
                           type="button"
                           target="_blank"
                           to="/"
                        >
                           {" "}
                           <h4>Let's go Home!</h4>
                        </Link>
                     </div>
                  </div>
               </div>
            </section>
         </TransitionPageIn>
      </>
   )
}

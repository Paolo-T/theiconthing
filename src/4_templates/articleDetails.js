import React from "react"
import SEO from "../1_components/Seo"
import { graphql } from "gatsby"
import TransitionPageIn from "../1_components/TransitionPageIn"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ProjectsTiles from "../2_sections/ProjectsTiles"
import IconArrow from "../icons/arrow.svg"
import { Link } from "gatsby"

export const data = graphql`
   query($slug: String!) {
      templateDataJson(slug: { eq: $slug }) {
         slug
         hero {
            subtitle
            title
            heroImg {
               childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
               }
            }
         }
         contentList {
            title
            listItems {
               description
               title
            }
         }
      }
   }
`

export default function articletDetails({ data }) {
   const { title, subtitle } = data.templateDataJson.hero
   const heroImg =
      data.templateDataJson.hero.heroImg && getImage(data.templateDataJson.hero.heroImg.childImageSharp.gatsbyImageData)
   // const content_1 = data.templateDataJson.content_1
   // const contentImg_1 = data.templateDataJson.contentImg_1
   const contentListist = data.templateDataJson.contentList
   // const content_2 = data.templateDataJson.content_2
   // const contentImg_2 = data.templateDataJson.contentImg_2
   // const contentImg_3 = data.templateDataJson.contentImg_3
   // const gallery = data.templateDataJson.gallery

   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `User Interface design`,
               `Interaction design`,
               `Prototyping`,
               `UX Design`,
               `UX/UI`,
               `Visual Design`,
               `User Experience`,
               `User centred`,
               `Web Design`,
               `Product Design`,
               `Wireframes`,
               `Usability testing`,
               `Portfolio`,
               `App`,
               `Website`,
               `Photography`,
               `Photo manipulation`,
               `Photos`,
               `Illustration`,
               `Digital art`,
               `Design thinking`,
               `Figma`,
               `Sketch`,
               `Adobe Photoshop`,
               `Adobe Illustrator`,
               `Tailwind css`,
               `Portfolio`,
            ]}
            title={`Paolo Todde | ${title}`}
         />

         <TransitionPageIn>
            {title && title.length ? (
               <section className="container pt-32 sm:pt-32 md:pt-48 mb-6 md:mb-24">
                  <div className="page-header mb-6">
                     <h1 className="h1-page w-full text-dark">{title}</h1>
                     {subtitle ? <p className="text-xl md:text-2xl text-grey mb-2">{subtitle}</p> : null}
                  </div>

                  {heroImg ? (
                     <GatsbyImage image={heroImg} alt={`${title} + "presentation image"`} loading="eager" />
                  ) : null}
               </section>
            ) : null}
            {/* Content */}

            {/* Content list */}
            {contentListist.listItems && contentListist.listItems.length ? (
               <section className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-y-4 md:gap-y-6 gap-x-0 pb-10 md:pb-24 text-dark">
                  <h2 className="hidden md:block col-start-1 col-end-5 md:col-start-3 md:col-end-4 mb-0 md:mb-4 ">
                     {contentListist.title}
                  </h2>

                  {contentListist.listItems.map((listItem, i) => (
                     <div key={i} className="col-start-1 col-end-5 md:col-start-5 md:col-end-10">
                        <h4 className="uppercase tracking-widest col-start-1 col-end-4 md:col-start-1 mb-2">
                           {listItem.title}
                        </h4>
                        <p className="">{listItem.description}</p>
                     </div>
                  ))}
               </section>
            ) : null}

            <div className="container mx-auto grid grid-cols-4 md:grid-cols-12 mb-10 md:mb-24">
               <div className="md:col-start-5 md:col-end-8 flex items-baseline space-x-3 text-left text-dark">
                  <IconArrow className="rotate-90 text-primary" />
                  <Link
                     className="container flex-1 underlined
                     transition duration-100 ease-in-out dark-text-hover"
                     type="button"
                     to="/"
                  >
                     {" "}
                     <h4>Home</h4>
                  </Link>
               </div>
            </div>

            <ProjectsTiles isPageNav={true} />
         </TransitionPageIn>
      </>
   )
}

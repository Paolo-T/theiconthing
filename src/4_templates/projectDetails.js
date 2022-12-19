import React from "react"
import SEO from "../1_components/Seo"
import { graphql } from "gatsby"
import TransitionPageIn from "../1_components/TransitionPageIn"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ProjectsTiles from "../2_sections/ProjectsTiles"

export const data = graphql`
   query($slug: String!) {
      projectDataJson(slug: { eq: $slug }) {
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
         content_1 {
            id
            aside {
               list
               title
            }
            main {
               body
               title
            }
         }
         contentImg_1 {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         contentList {
            title
            listItems {
               description
               title
            }
         }
         contentImg_2 {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         content_2 {
            id
            aside {
               list
               title
            }
            main {
               body
               title
            }
         }
         contentImg_3 {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         gallery {
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   }
`

export default function ProjectDetails({ data }) {
   const { title, subtitle } = data.projectDataJson.hero
   const heroImg =
      data.projectDataJson.hero.heroImg && getImage(data.projectDataJson.hero.heroImg.childImageSharp.gatsbyImageData)
   const content_1 = data.projectDataJson.content_1
   const contentImg_1 = data.projectDataJson.contentImg_1
   const contentListist = data.projectDataJson.contentList
   const content_2 = data.projectDataJson.content_2
   const contentImg_2 = data.projectDataJson.contentImg_2
   const contentImg_3 = data.projectDataJson.contentImg_3
   const gallery = data.projectDataJson.gallery
   console.log(data)
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
            ]}
            title={`Paolo Todde | ${title}`}
         />
         <div className="w-screen">
            {/* Hero */}
            <TransitionPageIn>
               <section className="container pt-32 sm:pt-32 md:pt-48 mb-0 md:mb-24">
                  <div className="page-header mb-6">
                     <h1 className="h1-page w-full text-dark">{title}</h1>
                     {subtitle && <p className="text-xl md:text-2xl text-grey mb-2">{subtitle}</p>}
                  </div>

                  {heroImg && <GatsbyImage image={heroImg} alt={`${title} + "presentation image"`} loading="eager" />}
               </section>
               {/* Content */}
               {content_1 & Array.isArray(content_1) && (
                  <section className="w-full text-dark">
                     {content_1.map((section, i) => (
                        <div key={i} className="container md:mb-20">
                           {/* Paragraph */}
                           <div className="grid grid-cols-1 md:grid-cols-12 md:gap-y-16 gap-x-0">
                              <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                                 <h4 className="mb-3 mt-1.5 text-grey">{section.aside.title}</h4>
                                 {Object.values(section.aside.list).map((item, i) => (
                                    <p key={i} className="text-grey">
                                       {item}
                                    </p>
                                 ))}
                              </div>
                              <div className="mt-10 md:mt-0 col-start-5 col-end-11">
                                 <h2>{section.main.title}</h2>
                                 <p>{section.main.body}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </section>
               )}
               {/* Image */}
               {(Array.isArray(contentImg_1) || contentImg_1.length) &&
                  contentImg_1.map((image, i) => (
                     <GatsbyImage
                        key={i}
                        image={image.childImageSharp.gatsbyImageData}
                        className="container grid col-span-12 mt-4 md:mt-0"
                        alt={`${title} "presentation image"`}
                        loading="eager"
                     />
                  ))}{" "}
               {/* Content list */}
               {contentListist.title && (
                  <section className="container mx-auto grid grid-cols-4 md:grid-cols-12 gap-y-6 md:gap-y-6 gap-x-0 py-10 md:py-24 text-dark">
                     <h2 className="col-start-1 col-end-5 md:col-start-2 md:col-end-4 mb-0 md:mb-4 ">
                        {contentListist.title}
                     </h2>
                     {Array.isArray(contentListist.listItems) &&
                        contentListist.listItems.map((listItem, i) => (
                           <div key={i} className="col-start-1 col-end-5 md:col-start-5 md:col-end-11">
                              <h4 className="uppercase tracking-widest col-start-1 col-end-4 md:col-start-1 mb-2">
                                 {listItem.title}
                              </h4>
                              <p className="col-start-4 col-end-12">{listItem.description}</p>
                           </div>
                        ))}
                  </section>
               )}
               {/* Image */}
               {(Array.isArray(contentImg_2) || contentImg_2.length) &&
                  contentImg_2.map((image, i) => (
                     <GatsbyImage
                        key={i}
                        image={image.childImageSharp.gatsbyImageData}
                        className={`container grid col-span-12 mb-20 ${
                           !data.projectDataJson.contentList.title && "mt-20"
                        }`}
                        alt={`${title} "presentation image"`}
                        loading="lazy"
                     />
                  ))}{" "}
               {/* Content */}
               {Array.isArray(content_2) && (
                  <section className="w-full text-dark">
                     {content_2.map((section, i) => (
                        <div key={i} className="container md:mb-20">
                           {/* Paragraph */}
                           <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-0">
                              <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                                 <h4 className="mb-2 mt-2 text-grey">{section.aside.title}</h4>
                                 {(Array.isArray(section.aside.list) || section.aside.list.length) &&
                                    Object.values(section.aside.list).map((item, i) => (
                                       <p key={i} className="text-grey">
                                          {item}
                                       </p>
                                    ))}
                              </div>
                              <div className="col-start-5 col-end-11 md:mt-10">
                                 <h2>{section.main.title}</h2>
                                 <p>{section.main.body}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </section>
               )}
               {/* Image */}
               <div
                  className={
                     Array.isArray(contentImg_3) & (contentImg_3.length > 3)
                        ? "container grid grid-cols-3 gap-y-6 md:gap-x-6 "
                        : "container grid col-span-12"
                  }
               >
                  {Array.isArray(contentImg_3) &&
                     contentImg_3.map((image, i) => (
                        <GatsbyImage
                           key={i}
                           image={image.childImageSharp.gatsbyImageData}
                           alt={`${title} "presentation image"`}
                           loading="lazy"
                        />
                     ))}{" "}
               </div>
               {/* Gallery */}
               <div
                  className={
                     Array.isArray(gallery) &&
                     "container columns-2 sm:columns-3 md:columns-4 gap-3 sm:gap-4 md:gap-8 pt-32 sm:pt-32 md:pt-48 mb-0 md:mb-32"
                  }
               >
                  {Array.isArray(gallery) &&
                     gallery.map((image, i) => (
                        <div className="mb-3 md:mb-7">
                           <GatsbyImage
                              key={i}
                              image={image.childImageSharp.gatsbyImageData}
                              alt={`${title} "presentation image"`}
                              loading="eager"
                           />
                           {/* <span className="text-grey">Porto 2022</span> */}
                        </div>
                     ))}{" "}
               </div>
               <ProjectsTiles isPageNav={true} />
            </TransitionPageIn>
         </div>
      </>
   )
}

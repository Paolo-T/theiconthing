import React from "react"
import SEO from "../components/Seo"
import { graphql, useStaticQuery } from "gatsby"
import TransitionPageIn from "../components/TransitionPageIn"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import ImgTiles from "../sections/ImgTiles"

export const data = graphql`
   query ($slug: String!) {
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
      }
   }
`

export default function ProjectDetails({ data }) {
   const { title, subtitle } = data.projectDataJson.hero

   const heroImg = getImage(data.projectDataJson.hero.heroImg.childImageSharp.gatsbyImageData)

   console.log("Data", data)

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
               `App`,
               `Website`,
            ]}
            title={`Paolo Todde | ${title}`}
         />
         <div className="w-screen bg-white">
            {/* Hero */}
            <TransitionPageIn>
               <section className="pt-10 sm:pt-32 md:pt-32 container">
                  <div className="page-header mb-6">
                     <h1 className="h1-page w-full text-dark">{title}</h1>
                     <p className="text-2xl text-grey md:text-2xl mb-2">{subtitle}</p>
                  </div>
                  <GatsbyImage
                     image={heroImg}
                     className="mb-24"
                     alt={`${title} + "presentation image"`}
                     loading="eager"
                  />
               </section>
               {/* Content */}
               {(Array.isArray(data.projectDataJson.content_1) || data.projectDataJson.content_1.length) && (
                  <section className="w-full bg-white text-dark">
                     {data.projectDataJson.content_1.map((section, i) => (
                        <div key={i} className="container md:mb-16">
                           {/* Paragraph */}
                           <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 gap-x-0 mb-20">
                              <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                                 <h4 className="mb-2 mt-1.5 text-grey">{section.aside.title}</h4>
                                 {Object.values(section.aside.list).map((item, i) => (
                                    <p key={i} className="text-grey">
                                       {item}
                                    </p>
                                 ))}
                              </div>
                              <div className="mt-10 md:mt-0 col-start-5 col-end-11">
                                 <h3>{section.main.title}</h3>
                                 <p>{section.main.body}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </section>
               )}
               {/* Image */}
               {(Array.isArray(data.projectDataJson.contentImg_1) || data.projectDataJson.contentImg_1.length) &&
                  data.projectDataJson.contentImg_1.map((image, i) => (
                     <GatsbyImage
                        key={i}
                        image={image.childImageSharp.gatsbyImageData}
                        className="container grid col-span-12"
                        alt={`${title} "presentation image"`}
                        loading="lazy"
                     />
                  ))}{" "}
               {/* Content list */}
               <section className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-y-6 gap-x-0 md:py-24 text-dark">
                  <h3 className="col-start-2 col-end-4">{data.projectDataJson.contentList.title}</h3>
                  {(Array.isArray(data.projectDataJson.contentList.listItems) ||
                     data.projectDataJson.contentList.listItems.length) &&
                     data.projectDataJson.contentList.listItems.map((listItem, i) => (
                        <div key={i} className="col-start-5 col-end-11">
                           <h4 className="uppercase tracking-widest col-start-1 col-end-4 md:col-start-1 mb-2">
                              {listItem.title}
                           </h4>
                           <p className="col-start-4 col-end-12">{listItem.description}</p>
                        </div>
                     ))}
               </section>
               {/* Image */}
               {(Array.isArray(data.projectDataJson.contentImg_2) || data.projectDataJson.contentImg_2.length) &&
                  data.projectDataJson.contentImg_2.map((image, i) => (
                     <GatsbyImage
                        key={i}
                        image={image.childImageSharp.gatsbyImageData}
                        className="container grid col-span-12 mb-20"
                        alt={`${title} "presentation image"`}
                        loading="lazy"
                     />
                  ))}{" "}
               {/* Content */}
               {Array.isArray(data.projectDataJson.content_2) && (
                  <section className="w-full bg-white text-dark">
                     {data.projectDataJson.content_2.map((section, i) => (
                        <div key={i} className="container md:mb-20">
                           {/* Paragraph */}
                           <div className="grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-0 mb-20">
                              <div className="hidden md:block col-start-2 col-end-4 md:mt-16">
                                 <h4 className="mb-2 mt-2 text-grey">{section.aside.title}</h4>
                                 {(Array.isArray(section.aside.list) || section.aside.list.length) &&
                                    Object.values(section.aside.list).map((item, i) => (
                                       <p key={i} className="text-grey">
                                          {item}
                                       </p>
                                    ))}
                              </div>
                              <div className="mt-10 md:mt-0 col-start-5 col-end-11">
                                 <h3>{section.main.title}</h3>
                                 <p>{section.main.body}</p>
                              </div>
                           </div>
                        </div>
                     ))}
                  </section>
               )}
               {/* Image */}
               {Array.isArray(data.projectDataJson.contentImg_3) &&
                  data.projectDataJson.contentImg_3.map((image, i) => (
                     <GatsbyImage
                        key={i}
                        image={image.childImageSharp.gatsbyImageData}
                        className="container grid col-span-12 mb-20"
                        alt={`${title} "presentation image"`}
                        loading="lazy"
                     />
                  ))}{" "}
               {/* Other projects */}
               <ImgTiles isPageNav={true} />
            </TransitionPageIn>
         </div>
      </>
   )
}

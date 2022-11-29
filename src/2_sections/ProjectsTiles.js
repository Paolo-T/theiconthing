import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImgTile from "../1_components/ImgTile"
import TransitionInview from "../1_components/TransitionInview"

function ImgTiles({ isPageNav, props }) {
   const data = useStaticQuery(graphql`
      query {
         classicaImg: file(relativePath: { eq: "classica/classica_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg: file(relativePath: { eq: "shuush/shuush_tile_2.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         petImg: file(relativePath: { eq: "petTime/petTime_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         spaceDigestImg: file(relativePath: { eq: "spaceDigest/spaceDigest_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         buzzsumoImg: file(relativePath: { eq: "buzzsumo/buzzsumo_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         brandwatchImg: file(relativePath: { eq: "brandwatch/brandwatch_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         homelyImg: file(relativePath: { eq: "homely/homely_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         theEcoExpertsImg: file(relativePath: { eq: "theEcoExperts/theEcoExperts_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
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

   const tilesData = [
      {
         label: "Web Design",
         title: "BuzzSumo",
         subTitle:
            "BuzzSumo is a powerful platform that allows you to find engaging pieces of content and discover new potential outreach opportunities.",
         cta: "View more",
         img: data.buzzsumoImg.childImageSharp.gatsbyImageData,
         id: data.buzzsumoImg.id,
         linkTo: "/projects/buzzsumo",
         imgAlt: "Buzzsumo Web Page",
         isLocked: false,
      },
      {
         label: "UI/UX Design",
         title: "The eco experts",
         subTitle:
            "Find out how much you’d pay for different home improvements, how much they’d save you and the climate over their lifespan, and which company makes the best",
         cta: "View use case",
         img: data.theEcoExpertsImg.childImageSharp.gatsbyImageData,
         id: data.theEcoExpertsImg.id,
         linkTo: "/theecoexperts",
         // hRef: "https://www.theecoexperts.co.uk/",
         imgAlt: "DIY tool rental",
         isExternal: false,
         isLocked: true,
      },
      {
         label: "UI/UX Design",
         title: "Pet Time",
         subTitle:
            "Concept design for a pet management product. Pet Time is a fun and friendly app for animal lovers. Whether you are experts or enthusiastic newbies, you'll find learning resources to help taking care of your pet friend",
         cta: "View use case",
         img: data.petImg.childImageSharp.gatsbyImageData,
         id: data.petImg.id,
         linkTo: "/projects/pet-time",
         imgAlt: "Pet Time App UI Design",
         isLocked: false,
      },
      {
         label: "UI/UX Design",
         title: "Homely",
         subTitle:
            "Concept design for a DIY tool rental product. Homely has a target customer base of amateurs: regular people who sometimes need to access tools for a specific, fairly straightforward DIY task.",
         cta: "View use case",
         img: data.homelyImg.childImageSharp.gatsbyImageData,
         id: data.homelyImg.id,
         linkTo: "/projects/homely",
         imgAlt: "DIY tool rental",
         isLocked: false,
      },
      {
         label: "UI/UX Design",
         title: "Classica",
         subTitle:
            "Concept design for a classical Music Player product. Classica is a fun and friendly app for the classical music lovers. Whether they are seasoned aficionados or enthusiastic newbies, they'll find plenty of learning material to support their listening experience.",
         cta: "View use case",
         img: data.classicaImg.childImageSharp.gatsbyImageData,
         id: data.classicaImg.id,
         linkTo: "/projects/classica",
         imgAlt: "classica app ui design",
         isLocked: false,
      },
      {
         label: "",
         title: "Digital art",
         subTitle: "My personal Artwork illustration project",
         cta: "",
         img: data.digitalArtImg.childImageSharp.gatsbyImageData,
         id: "data.digitalArtImg.id",
         // linkTo: "",
         hRef: "https://www.instagram.com/paolo__todde/",
         imgAlt: "",
         isExternal: true,
         isLocked: false,
      },
      {
         label: "",
         title: "3DC",
         subTitle: "Visual Branding excersise",
         cta: "",
         img: data.threeImg.childImageSharp.gatsbyImageData,
         id: "data.threeImg.id",
         linkTo: "/three/",
         // hRef: "",
         imgAlt: "",
         isExternal: false,
         isLocked: false,
      },
   ]

   return (
      <section id="work" className={` ${isPageNav ? "w-full py-12 md:py-24 " : "pb-12 md:pt-16 md:pb-20"}`}>
         {isPageNav && <h3 className="container text-dark mb-10">Other projects</h3>}

         <div
            className={`
            ${
               isPageNav
                  ? "container grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-0"
                  : "flex flex-col space-y-8 md:space-y-32"
            }`}
         >
            <TransitionInview>
               {tilesData.map((tile, i) => (
                  <div key={tile.id} className={`${isPageNav ? null : "md:grid grid-cols-16"}`}>
                     <div className="col-span-12">
                        <ImgTile
                           classes={""}
                           alt={tile.title}
                           loading={"eager"}
                           img={tile.img}
                           imgAlt={tile.imgAlt}
                           title={!isPageNav && tile.title}
                           subTitle={!isPageNav && tile.subTitle}
                           cta={tile.cta}
                           label={!isPageNav && tile.label}
                           linkTo={tile.linkTo}
                           hRef={tile.hRef}
                           marginTop={tile.marginTop}
                           marginBottom={tile.marginBottom}
                           rounded={false}
                           isPageNav={isPageNav}
                           isExternal={tile.isExternal}
                           isLocked={tile.isLocked}
                        />
                     </div>
                     {isPageNav ? null : (
                        <div className="col-start-15 col-span-2">
                           <h2 className="text-lg sm:text-4xl md:text-4xl lg:text-5xl 2xl:text-5xl text-serif font-semibold md:mt-20">
                              0{i}
                           </h2>
                        </div>
                     )}
                  </div>
               ))}
            </TransitionInview>
         </div>
      </section>
   )
}

export default ImgTiles

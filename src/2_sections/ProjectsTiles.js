import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImgTile from "../1_components/ImgTile"
import TransitionInview from "../1_components/TransitionInview"

function ImgTiles({ isPageNav }) {
   const data = useStaticQuery(graphql`
      query {
         classicaImg: file(relativePath: { eq: "classica/classica_tile.png" }) {
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
         mvfDesignSystemtImg: file(relativePath: { eq: "mvf/mvf_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
         shuushImg: file(relativePath: { eq: "shuush/shuush_tile.png" }) {
            id
            childImageSharp {
               gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR, formats: [AUTO, WEBP], quality: 100)
            }
         }
      }
   `)

   const tilesData = [
      {
         id: data.mvfDesignSystemtImg.id,
         title: "MVF Design system",
         description:
            "Established the structure of the MVF multibrand design system.\n\nServing as a foundation at the core of the many company websites. The multibrand approach helps maintaining and scale multiple websites with different brands.",

         img: data.mvfDesignSystemtImg.childImageSharp.gatsbyImageData,
         imgAlt: "MVF Design System",
         linkTo: "/",
         hRef: null,
         isExternal: false,
         isLocked: true,
      },
      {
         id: data.buzzsumoImg.id,
         title: "BuzzSumo",
         description:
            "BuzzSumo is a powerful platform that allows you to find engaging pieces of content and discover new potential outreach opportunities.",

         img: data.buzzsumoImg.childImageSharp.gatsbyImageData,
         imgAlt: "Buzzsumo Web Page",
         linkTo: "/projects/buzzsumo",
         hRef: null,
         isExternal: false,
         isLocked: false,
      },
      {
         id: data.theEcoExpertsImg.id,
         title: "The eco experts",
         description:
            "Find out how much you’d pay for different home improvements, how much they’d save you and the climate over their lifespan, and which company makes the best.",

         img: data.theEcoExpertsImg.childImageSharp.gatsbyImageData,
         imgAlt: "DIY tool rental",
         linkTo: "/projects/theecoexperts",
         hRef: null,
         isExternal: false,
         isLocked: true,
      },
      {
         id: data.shuushImg.id,
         title: "Shuush",
         description:
            " exploration for a minimalistic mesaging app. Designd to eliminate all the superfluous clutter and present only the eesential functional features.",
         img: data.shuushImg.childImageSharp.gatsbyImageData,
         imgAlt: "Shuush app presentation",
         linkTo: "/projects/shuush",
         hRef: null,
         isExternal: false,
         isLocked: false,
      },
      {
         id: data.petImg.id,
         title: "Pet Time",
         description:
            " exploration for a pet management product. Pet Time is a fun and friendly app for animal lovers. Whether you are experts or enthusiastic newbies, you'll find learning resources to help taking care of your pet friend",

         img: data.petImg.childImageSharp.gatsbyImageData,
         imgAlt: "Pet Time App UI Design",
         linkTo: "/projects/pet-time",
         hRef: null,
         isExternal: false,
         isLocked: false,
      },
      {
         id: data.homelyImg.id,
         title: "Homely",
         description:
            " exploration for a DIY tool rental product. Homely has a target customer base of amateurs: regular people who sometimes need to access tools for a specific, fairly straightforward DIY task.",
         cta: "View use case",
         img: data.homelyImg.childImageSharp.gatsbyImageData,
         imgAlt: "DIY tool rental",
         linkTo: "/projects/homely",
         hRef: null,
         isExternal: false,
         isLocked: false,
      },
      {
         id: data.classicaImg.id,
         title: "Classica",
         description:
            "Exploration for a classical Music Player product. Classica is a fun and friendly app for the classical music lovers. Whether they are seasoned aficionados or enthusiastic newbies, they'll find plenty of learning material to support their listening experience.",

         img: data.classicaImg.childImageSharp.gatsbyImageData,
         imgAlt: "classica app ui design",
         linkTo: "/projects/classica",
         hRef: null,
         isExternal: false,
         isLocked: false,
      },
   ]

   return (
      <section id="work" className={`${isPageNav ? "w-full py-12 md:py-24 " : "spacing-top spacing-bottom"}`}>
         {isPageNav && <h3 className="container text-dark mb-10">Other projects</h3>}

         <div
            className={`
            ${
               isPageNav
                  ? "container grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-0"
                  : "flex flex-col space-y-10 md:space-y-32"
            }`}
         >
            {tilesData.map((tile, i) => (
               <TransitionInview key={tile.id}>
                  <ImgTile
                     id={i}
                     hRef={tile.hRef}
                     linkTo={tile.linkTo}
                     title={!isPageNav && tile.title}
                     titleSmall={false}
                     description={!isPageNav && tile.description}
                     img={tile.img}
                     imgAlt={tile.imgAlt}
                     isPageNav={isPageNav}
                     isExternal={tile.isExternal}
                     isLocked={tile.isLocked}
                     isHorizontal={true}
                     classes={""}
                  />
               </TransitionInview>
            ))}
         </div>
      </section>
   )
}

export default ImgTiles

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import ImgTile from "../components/ImgTile"
import TransitionInview from "../components/TransitionInview"

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
      }
   `)

   const tilesData = [
      {
         label: "Web Design",
         title: "BuzzSumo",
         subTitle: "Web Design Marketing",
         cta: "View more",
         img: data.buzzsumoImg.childImageSharp.gatsbyImageData,
         id: data.buzzsumoImg.id,
         linkTo: "/projects/buzzsumo",
         imgAlt: "Buzzsumo Web Page",
         isLocked: false,
      },
      {
         label: "UI/UX Design",
         title: "Pet Time",
         subTitle: "Pet management",
         cta: "View use case",
         img: data.petImg.childImageSharp.gatsbyImageData,
         id: data.petImg.id,
         linkTo: "/projects/pet-time",
         imgAlt: "Pet Time App UI Design",
         isLocked: false,
      },
      {
         label: "UI/UX Design",
         title: "Homely.",
         subTitle: "DIY tool rental",
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
         subTitle: "Classical Music Player",
         cta: "View use case",
         img: data.classicaImg.childImageSharp.gatsbyImageData,
         id: data.classicaImg.id,
         linkTo: "/projects/classica",
         imgAlt: "classica app ui design",
         isLocked: false,
      },

      {
         label: "UI/UX Design",
         title: "theecoexperts.co.uk",
         subTitle: "Web design",
         cta: "View use case",
         img: data.theEcoExpertsImg.childImageSharp.gatsbyImageData,
         id: data.theEcoExpertsImg.id,
         linkTo: "/theecoexperts",
         // hRef: "https://www.theecoexperts.co.uk/",
         imgAlt: "DIY tool rental",
         isExternal: false,
         isLocked: true,
      },

      // {
      //    label: "UI/UX Design",
      //    title: "Shuush!",
      //    subTitle: "Minimalist messaging",
      //    cta: "View use case",
      //    img: data.shuushImg.childImageSharp.gatsbyImageData,
      //    id: data.shuushImg.id,
      //    linkTo: "/shuush",
      //    imgAlt: "Shuush! App UI Design",
      //    isLocked: false,
      // },
   ]

   return (
      <section id="work" className={` ${isPageNav ? "bg-white py-24 " : "py-8 md:py-36"}`}>
         {isPageNav && <h3 className="container text-dark mb-4 md:mb-12">Other projects</h3>}

         <div
            className={`container grid ${
               isPageNav ? "grid-cols-1 md:grid-cols-3 gap-5" : "grid-cols-1 gap-4 md:gap-24 "
            }`}
         >
            {tilesData.map((tile) => (
               // pageLocation !== tile.linkTo && (
               <TransitionInview key={tile.id}>
                  <ImgTile
                     className={`mb-1 opacity-50`}
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
                     rounded="0"
                     isPageNav={isPageNav}
                     isExternal={tile.isExternal}
                     isLocked={tile.isLocked}
                  />
               </TransitionInview>
            ))}
         </div>
      </section>
   )
}

export default ImgTiles

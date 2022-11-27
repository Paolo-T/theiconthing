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
         title: "The eco experts",
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
      {
         label: "UI/UX Design",
         title: "Pet Time",
         subTitle: "Pet management – concept",
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
         subTitle: "DIY tool rental – concept",
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
         subTitle: "Classical Music Player – concept",
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
         subTitle: "Illustration",
         cta: "",
         img: data.digitalArtImg.childImageSharp.gatsbyImageData,
         id: "",
         // linkTo: "",
         hRef: "https://www.instagram.com/paolo__todde/",
         imgAlt: "",
         isExternal: true,
         isLocked: false,
      },
      {
         label: "",
         title: "3dc designs",
         subTitle: "Branding",
         cta: "",
         img: data.threeImg.childImageSharp.gatsbyImageData,
         id: "",
         linkTo: "/three/",
         // hRef: "",
         imgAlt: "",
         isExternal: false,
         isLocked: false,
      },
   ]

   return (
      <section id="work" className={` ${isPageNav ? "bg-white py-24 " : "py-10 md:py-16"}`}>
         {isPageNav && <h3 className="container text-dark mb-4">Other projects</h3>}

         <div
            className={`container grid ${
               isPageNav ? "grid-cols-1 md:grid-cols-4 gap-5" : "grid-cols-1 gap-6 md:gap-16 "
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
                     rounded={false}
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

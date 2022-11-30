import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function ImgTile({ linkTo, hRef, title, subTitle, img, imgAlt, isPageNav, isExternal, isLocked, classes }) {
   const imgHoverMotion =
      '"transition duration-500 transform cursor-pointer group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"'
   return (
      <>
         {linkTo && (
            <Link to={!isLocked && linkTo}>
               <div className={`relative group overflow-hidden ${classes}`}>
                  <GatsbyImage className={!isLocked && imgHoverMotion} image={img} alt={imgAlt} loading={"eager"} />
               </div>
            </Link>
         )}
         {isExternal && (
            <a href={hRef} target="_blank" rel="noopener noreferrer">
               <div className={`relative group ${classes}`}>
                  <GatsbyImage className={!isLocked && imgHoverMotion} image={img} alt={imgAlt} loading={"eager"} />
               </div>
            </a>
         )}
         {isPageNav ? null : (
            <div className="md:flex justify-between items-start mt-6 md:mt-8 text-left">
               <h2 className="flex-1 text-dark mb-3 md:mb-3 uppercase">{title}</h2>
               <span className="flex-1 mb-1">{subTitle}</span>
            </div>
         )}
      </>
   )
}

export default ImgTile

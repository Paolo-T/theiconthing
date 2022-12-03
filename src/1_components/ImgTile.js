import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import IconLock from "../icons/lock.svg"

function ImgTile({
   id,
   linkTo,
   hRef,
   title,
   titleSmall,
   description,
   img,
   imgAlt,
   isPageNav,
   isExternal,
   isLocked,
   isHorizontal,
   classes,
}) {
   const imgHoverMotion =
      '"transition duration-500 transform cursor-pointer group-hover:scale-[1.025] group-hover:rotate-[1.02deg] overflow-hidden"'
   return (
      <div className={`${isHorizontal ? "md:grid grid-cols-16 grid-gap" : "flex-1"} overflow-hidden ${classes}`}>
         <div className={`${isHorizontal ? "col-start-1 col-end-13 overflow-hidden" : ""} overflow-hidden`}>
            {linkTo && (
               <Link to={!isLocked && linkTo}>
                  <div className="group">
                     <GatsbyImage className={!isLocked && imgHoverMotion} image={img} alt={imgAlt} loading={"eager"} />
                  </div>
               </Link>
            )}
            {isExternal && (
               <a href={hRef} target="_blank" rel="noopener noreferrer">
                  <div className="group">
                     <GatsbyImage className={!isLocked && imgHoverMotion} image={img} alt={imgAlt} loading={"eager"} />
                  </div>
               </a>
            )}
         </div>
         {!isPageNav && (
            <div className={`${isHorizontal ? "col-start-13 col-end-16 pt-4" : "mt-3 md:mt-5"}`}>
               <div className="h-full flex flex-col">
                  <div className="">
                     {isHorizontal && (
                        <span className="text-2xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-3xl text-serif font-semibold align-top">
                           0{id + 1}
                        </span>
                     )}
                     {titleSmall ? (
                        <h4 className="text-dark mb-3 md:mb-2 uppercase">{title}</h4>
                     ) : (
                        <h2 className="text-dark mb-3 md:mb-5 uppercase">{title}</h2>
                     )}
                  </div>
                  <span>{description}</span>
                  {isLocked && (
                     <div className="pt-2 md:pt-3">
                        <IconLock className="w-5 mr-2 inline h-auto" />
                        <span>Coming soon...</span>{" "}
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   )
}

export default ImgTile

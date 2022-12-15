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
      '"transition duration-500 transform cursor-pointer group-hover:scale-[1.025] group-hover:rotate-[0.7deg] overflow-hidden"'
   return (
      <div
         className={`${
            isHorizontal & !isPageNav ? "xl:grid grid-cols-16 grid-gap" : "flex-1 h-full flex flex-col"
         } overflow-hidden ${classes}`}
      >
         {/* Image */}
         <div className={`${isHorizontal ? "h-auto col-start-1 col-end-14 overflow-hidden" : ""} overflow-hidden`}>
            {linkTo && (
               <Link to={isLocked ? "#0" : linkTo} className="cursor-default">
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
         {/* !END Image */}
         {!isPageNav && (
            <div
               className={`${
                  isHorizontal ? "block xl:block xl:col-start-14 xl:col-end-17  " : ""
               } md:flex flex-row justify-between items-center pt-2 md:pt-4`}
            >
               {/* Title */}
               <div className="flex-1 flex-col">
                  {isHorizontal && (
                     <span className="inline-block text-3xl sm:text-3xl md:text-4xl lg:text-4xl 2xl:text-4xl text-serif font-semibold pb-2 md:pb-2">
                        0{id + 1}
                     </span>
                  )}
                  {titleSmall ? (
                     <h4 className="my-2 md:mb-2 uppercase">{title}</h4>
                  ) : (
                     <h2 className="mb-3 md:mb-4 uppercase">{title}</h2>
                  )}
                  {isLocked && (
                     <div className="mb-3 text-primary">
                        <IconLock className="w-5 mr-2 inline h-auto" />
                        <span>Coming soon...</span>{" "}
                     </div>
                  )}
               </div>
               {/* !END Title */}
               {/* Description */}
               <div className="flex-1">
                  <span>{description}</span>
               </div>
               {/* !END Description */}
            </div>
         )}
      </div>
   )
}

export default ImgTile

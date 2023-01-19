import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import IconLock from "../icons/lock.svg"
import Linker from "./Linker"

function ImgTile({
   id,
   linkTo,
   hRef,
   title,
   titleSmall,
   description,
   cta,
   img,
   imgAlt,
   isPageNav,
   isExternal,
   isLocked,
   isHorizontal,
   classes,
   tabIndex,
}) {
   const imgHoverMotion =
      '"transition duration-500 transform cursor-pointer group-hover:scale-[1.025] group-hover:rotate-[0.7deg] "'
   return (
      <div
         className={`group ${
            isHorizontal & !isPageNav ? "xl:grid grid-cols-16 grid-gap items-center" : "flex-1 h-full flex flex-col"
         } overflow-hidden ${classes}`}
      >
         {/* Image */}
         <div
            className={`${
               !isPageNav ? "h-auto col-start-1 col-end-14 rounded-xl overflow-hidden" : ""
            } overflow-hidden focus:`}
         >
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
                  isHorizontal ? "block md:flex xl:block xl:col-start-14 xl:col-end-17 mt-5 xl:mt-0" : null
               }`}
            >
               <div className="flex-1">
                  {titleSmall ? (
                     <h4 className="my-2 md:mb-2 uppercase">{title}</h4>
                  ) : (
                     <h2 className="uppercase">{title}</h2>
                  )}
                  {isLocked && (
                     <div className="mb-3 text-secondary">
                        <IconLock className="w-5 mr-2 inline h-auto" />
                        <span>Coming soon...</span>{" "}
                     </div>
                  )}
               </div>
               <div className="flex-1">
                  <span>{description}</span>
               </div>

               {isLocked ||
                  (cta && (
                     <Linker
                        label={cta}
                        customClass={"hidden xl:inline-block mt-7 group-hover:border-primary group-hover:text-primary"}
                        href={hRef}
                        linkTo={linkTo}
                     />
                  ))}
            </div>
         )}
      </div>
   )
}

export default ImgTile

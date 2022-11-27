import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

function ImgTile({
   linkTo,
   title,
   subTitle,
   img,
   imgAlt,
   marginTop,
   marginBottom,
   rounded,
   isPageNav,
   isExternal,
   hRef,
   isLocked,
   classes,
}) {
   return (
      <div>
         <Link to={!isLocked && linkTo}>
            <a href={isExternal && hRef} target="_blank" rel="noopener noreferrer">
               <div
                  className={`relative group transition duration-500 transform
                  rounded-${rounded ? "2xl" : "0"} overflow-hidden
                  ${
                     isPageNav
                        ? "transition duration-500 transform cursor-pointer group-hover:scale-[1.1] group-hover:rotate-[0.5deg]"
                        : ""
                  }
                  md:mt-${marginTop} md:mb-${marginBottom} ${classes}`}
               >
                  <GatsbyImage
                     className={`transition duration-500 transform ${
                        !isLocked
                           ? "cursor-pointer group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"
                           : "cursor-default"
                     } `}
                     image={img}
                     alt={imgAlt}
                     loading={"eager"}
                  />
               </div>
            </a>
         </Link>
         <div className="grid grid-cols-2 gap-6 items-baseline mt-2 md:mt-8 text-left">
            <h2 className="text-dark mb-0 uppercase">{title}</h2>
            <p className="mb-0.5">{subTitle}</p>
         </div>
      </div>
   )
}

export default ImgTile

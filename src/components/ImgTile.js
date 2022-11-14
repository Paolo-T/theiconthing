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
}) {
   return (
      <div>
         <Link to={!isLocked && linkTo}>
            <a href={isExternal && hRef} target="_blank" rel="noopener noreferrer">
               <div
                  className={`relative group w-full transition duration-500 transform
               rounded-${rounded ? rounded : 0} overflow-hidden
                  ${
                     isPageNav
                        ? "transition duration-500 transform cursor-pointer group-hover:scale-[1.1] group-hover:rotate-[0.5deg"
                        : ""
                  }
                  md:mt-${marginTop} md:mb-${marginBottom}`}
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

                  {!isPageNav ? (
                     <div
                        className="group absolute top-0 left-0 md:left-auto md:right-0
                     flex justify-between align-bottom
                     bg-dark/60 backdrop-blur-xs px-3 py-2
                  opacity-0 group-hover:opacity-100 transition ease-in-out duration-100"
                     >
                        <p className="text-xs md:text-sm font-bold tracking-more">{title}</p>
                        <p className="text-xs md:text-xs mx-1 align-baseline md:mx-3">|</p>
                        {isLocked ? (
                           <div className="w-6 md:w-4">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 className="hover:text-grey"
                              >
                                 <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    stroke="currentColor"
                                    strokeWidth={1.5}
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                 />
                              </svg>
                           </div>
                        ) : (
                           <p className="text-xs md:text-sm tracking-more">{subTitle}</p>
                        )}
                     </div>
                  ) : null}
               </div>
            </a>
         </Link>
      </div>
   )
}

export default ImgTile

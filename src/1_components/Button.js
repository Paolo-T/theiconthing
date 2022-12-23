import React from "react"
import { Link } from "gatsby"

function Button({ linkTo, href, onClick, label, labelSmall, underlined, noBorder, customClass }) {
   return (
      <>
         {href || onClick ? (
            <a
               type="button"
               rel="noopener noreferrer"
               target="_blank"
               href={href && href}
               onClick={onClick && onClick}
               className={`bg-transparent text-center text-offWhite
               ${!noBorder && "border border-offWhite hover:border-primary py-1 px-6"}
               dark-text-hover
               lg:text-2xl xl:text-2xl 2xl:text-2xl font-normal
               ${customClass}`}
            >
               <p
                  className={` ${labelSmall ? "text-sm md:text-base leading-less" : "text-md sm:text-xl md:text-2xl"} ${
                     underlined && "underline underline-offset-4 decoration-1"
                  }`}
               >
                  {label}
               </p>
            </a>
         ) : null}
         {linkTo ? (
            <Link
               type="button"
               target="_blank"
               to={linkTo && linkTo}
               onClick={onClick && onClick}
               className={`bg-transparent text-center text-offWhite
               ${!noBorder && "border border-offWhite hover:border-primary py-1.5 px-6"}
               dark-text-hover lg:text-2xl xl:text-2xl 2xl:text-2xl font-normal
               ${customClass}`}
            >
               <p
                  className={` ${labelSmall ? "text-sm md:text-base leading-less" : "text-md sm:text-xl md:text-2xl"} ${
                     underlined && "underline underline-offset-4 decoration-1"
                  }`}
               >
                  {label}
               </p>
            </Link>
         ) : null}
      </>
   )
}

export default Button

import React from "react"

function Button({ linkTo, href, label, customClass }) {
   return (
      <>
         {href && (
            <a
               type="button"
               rel="noopener noreferrer"
               target="_blank"
               href={href}
               className={`bg-transparent text-center text-offWhite border border-offWhite hover:border-primary
              dark-text-hover py-1 px-6 text-md sm:text-xl md:text-2xl
               lg:text-2xl xl:text-2xl 2xl:text-2xl font-normal ${customClass}`}
            >
               <p>{label}</p>
            </a>
         )}
         {linkTo && (
            <a
               type="button"
               rel="noopener noreferrer"
               target="_blank"
               href={linkTo}
               className={`bg-transparent text-center text-offWhite border border-offWhite hover:border-primary
              dark-text-hover py-1.5 px-6 text-md sm:text-xl md:text-2xl
               lg:text-2xl xl:text-2xl 2xl:text-2xl font-normal ${customClass}`}
            >
               <p>{label}</p>
            </a>
         )}
      </>
   )
}

export default Button

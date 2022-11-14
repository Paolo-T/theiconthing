import React from "react"

function Button({ href, label, customClass }) {
   return (
      <a
         type="button"
         rel="noopener noreferrer"
         target="_blank"
         href={href}
         class={`bg-transparent text-center text-primary hover:text-yellow-500 border border-primary hover:border-yellow-500
               transition duration-100 ease-in-out py-2 px-10 text-md sm:text-xl md:text-2xl
               lg:text-2xl xl:text-2xl 2xl:text-2xl font-normal ${customClass}`}
      >
         {label}
      </a>
   )
}

export default Button

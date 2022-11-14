import React from "react"
import { useLocation } from "@reach/router"

function Hero() {
   const location = useLocation()
   const home = location.pathname === "/"

   return (
      <div className="w-full h-full bg-primary">
         <div
            className="container relative
                    pt-20 md:pt-16 md:pb-20 xl:pb-24 pb-10 text-left"
         >
            <div className="relative">
               <h1 className="lg:w-12/12 xl:w-12/12 2xl:w-12/12 mb-12 sm:mb-12 md:mb-20 lg:mb-16 xl:mb-16 md:mt-20 xl:mt-32 leading-less xl:leading-tight  ">
                  {" "}
                  Specialising in human-centred user experience. Tailored pixel perfect visual design solutions.
               </h1>

               <h2
                  className="flex-1 underline underline-offset-4
               transition duration-100 ease-in-out hover:text-dark"
               >
                  <a type="button" rel="noopener noreferrer" target="_blank" href="mailto:room01info@gmail.com">
                     {" "}
                     Send a message
                  </a>
               </h2>
            </div>
         </div>
      </div>
   )
}

export default Hero

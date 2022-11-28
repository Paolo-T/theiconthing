import React from "react"
import { useLocation } from "@reach/router"
// import TransitionPageIn from "../1_components/TransitionPageIn"
import TransitionInview from "../1_components/TransitionInview"

function Hero() {
   const location = useLocation()
   const home = location.pathname === "/"

   return (
      <section className="bg-primary">
         <div className="w-full md:w-[80%] text-left pt-32 md:pt-72 pb-16">
            <TransitionInview>
               <h1 className="font-hero tracking-wide mb-8 sm:mb-12 md:mb-16 lg:mb-20 leading-less xl:leading-tight">
                  {" "}
                  Specialising in human-centred user experience. Tailored pixel perfect visual design solutions.
               </h1>
            </TransitionInview>

            <div className="flex items-baseline space-x-3">
               <svg
                  className="rotate-90"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="currentColor"
               >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
               </svg>

               <h4
                  className="container flex-1 underline underline-offset-4
                  transition duration-100 ease-in-out text-hover"
               >
                  <a type="button" rel="noopener noreferrer" target="_blank" href="mailto:room01info@gmail.com">
                     {" "}
                     Send me a message
                  </a>
               </h4>
            </div>
         </div>
      </section>
   )
}

export default Hero

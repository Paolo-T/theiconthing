import React from "react"
import { useLocation } from "@reach/router"
// import TransitionPageIn from "../1_components/TransitionPageIn"
import TransitionInview from "../1_components/TransitionInview"

function Hero() {
   const location = useLocation()
   const home = location.pathname === "/"

   return (
      <section className="w-full text-left pt-32 md:pt-72 pb-16">
         <TransitionInview>
            <div className="md:grid grid-cols-16">
               <h1 className="col-start-1 col-end-14 font-hero mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                  {" "}
                  Specialising in human-centred user experience. Tailored pixel perfect visual design solutions.
               </h1>
            </div>
         </TransitionInview>

         <div className="flex items-baseline space-x-3 text-primary">
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
                  transition duration-100 ease-in-out hover:text-dark "
            >
               <a type="button" rel="noopener noreferrer" target="_blank" href="mailto:room01info@gmail.com">
                  {" "}
                  Send me a message
               </a>
            </h4>
         </div>
      </section>
   )
}

export default Hero

import React from "react"
import { useLocation } from "@reach/router"
// import TransitionPageIn from "../1_components/TransitionPageIn"
import TransitionInview from "../1_components/TransitionInview"

function Hero() {
   const location = useLocation()
   const home = location.pathname === "/"

   return (
      <section className="bg-primary">
         <div className="container text-left pt-72 pb-32 relative pr-98">
            <TransitionInview>
               <h1 className="lg:w-12/12 xl:w-12/12 2xl:w-12/12 mb-12 sm:mb-12 md:mb-16 lg:mb-20 leading-less xl:leading-tight">
                  {" "}
                  Specialising in human-centred user experience. Tailored pixel perfect visual design solutions.
               </h1>
            </TransitionInview>

            <h3
               className="flex-1 underline underline-offset-4
               transition duration-100 ease-in-out text-hover"
            >
               <a type="button" rel="noopener noreferrer" target="_blank" href="mailto:room01info@gmail.com">
                  {" "}
                  Send me a message
               </a>
            </h3>
         </div>
      </section>
   )
}

export default Hero

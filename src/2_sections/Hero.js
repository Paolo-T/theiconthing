import React from "react"
import { useLocation } from "@reach/router"
import IconArrow from "../icons/arrow.svg"
import TransitionInview from "../1_components/TransitionInview"

function Hero() {
   const location = useLocation()
   // const home = location.pathname === "/"

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
            <IconArrow />

            <a
               className="container flex-1 underline underline-offset-4
                  transition duration-100 ease-in-out hover:text-dark"
               type="button"
               rel="noopener noreferrer"
               target="_blank"
               href="mailto:room01info@gmail.com"
            >
               {" "}
               <div className="flex space-x-2 tems-start">
                  <h4>Send me a message</h4>
               </div>
            </a>
         </div>
      </section>
   )
}

export default Hero

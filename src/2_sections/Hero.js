import React from "react"
import { useLocation } from "@reach/router"
import IconArrow from "../icons/arrow.svg"
import TransitionInview from "../1_components/TransitionInview"

function Hero() {
   const location = useLocation()
   // const home = location.pathname === "/"

   return (
      <section className="w-full text-left pt-32 md:pt-72 spacing-bottom">
         <TransitionInview>
            <div className="md:grid grid-cols-16 grid-gap">
               <h1 className="col-start-1 col-end-14 font-hero mb-8 sm:mb-12 md:mb-16 lg:mb-20 leading-some">
                  {" "}
                  Specialising in human-centred user experience. Tailored pixel perfect, accessible visual design
                  solutions.
               </h1>
            </div>
         </TransitionInview>

         <div className="flex items-baseline space-x-3">
            <IconArrow className="rotate-90 text-primary" />

            <a
               className="container flex-1 underline underline-offset-4
                  transition duration-100 ease-in-out dark-text-hover"
               type="button"
               rel="noopener noreferrer"
               target="_blank"
               href="mailto:room01info@gmail.com"
            >
               {" "}
               <h4>Send me a message</h4>
            </a>
         </div>
      </section>
   )
}

export default Hero

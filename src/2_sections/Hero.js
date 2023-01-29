import React from "react"
import { useLocation } from "@reach/router"
import TransitionInview from "../1_components/TransitionInview"

const strings = {
   hero: "The Icon thing collection",
   subtitle: "Icons for all",
}

function Hero() {
   const location = useLocation()
   return (
      <section className="bg-dark text-offWhite relative w-full pt-32 md:pt-64 md:spacing-bottom text-center xl:mb-24">
         <div>
            <span className="absolute inset-0 bg-ImageBg bg-auto w-full h-full" style={{ opacity: "6%" }}></span>
            <span
               className="absolute inset-0 z-0 bg-gradient-to-t from-dark lg:via-dark/80 to-transparent "
               style={{ opacity: "90%" }}
            ></span>
         </div>
         <TransitionInview>
            <div className="md:grid grid-cols-16 grid-gap">
               <h1 className="col-start-4 col-end-14 mb-8 sm:mb-12 md:mb-16 lg:mb-16 leading-some "> {strings.hero}</h1>
            </div>
            <h2 className="text-sm md:text-base font-bold uppercase tracking-widest">{strings.subtitle}</h2>
         </TransitionInview>
      </section>
   )
}

export default Hero

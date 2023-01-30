import React from "react"
import { useLocation } from "@reach/router"
import TransitionInview from "../1_components/TransitionInview"

const strings = {
   hero: "The Icon thing",
   subtitle: "Icon collection",
}

function Hero() {
   const location = useLocation()
   return (
      <section className="bg-dark text-offWhite relative w-full rounded-2xl py-40 md:spacing-bottom text-center xl:mb-24 mt-10 overflow-hidden bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500">
         <div>
            <span className="absolute inset-0 bg-ImageBg bg-auto w-full h-full" style={{ opacity: "6%" }}></span>
            <span className="absolute inset-0 z-0  " style={{ opacity: "9e%" }}></span>
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

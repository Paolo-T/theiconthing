import React from "react"
import { useLocation } from "@reach/router"
import TransitionInview from "../1_components/TransitionInview"

function Hero() {
   const location = useLocation()
   // const home = location.pathname === "/"

   return (
      <section className="w-full pt-32 md:pt-64 spacing-bottom text-center xl:mb-32">
         <TransitionInview>
            <div className="md:grid grid-cols-16 grid-gap">
               <h1 className="col-start-4 col-end-14 mb-8 sm:mb-12 md:mb-16 lg:mb-16 leading-some ">
                  {" "}
                  Human-centred design solutions.
               </h1>
            </div>

            <h4>UI | UX | Code </h4>
         </TransitionInview>
      </section>
   )
}

export default Hero

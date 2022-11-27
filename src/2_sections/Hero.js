import React from "react"
import { useLocation } from "@reach/router"
// import TransitionPageIn from "../1_components/TransitionPageIn"
import TransitionInview from "../1_components/TransitionInview"

function Hero() {
   const location = useLocation()
   const home = location.pathname === "/"

   return (
      <section className="bg-primary">
         <div className="text-left pt-72 pb-32 relative pr-60">
            <TransitionInview>
               <h1 className="mb-12 sm:mb-12 md:mb-16 lg:mb-20 leading-less xl:leading-tight">
                  {" "}
                  Specialising in human-centred user experience. Tailored pixel perfect visual design solutions.Bold
                  visual communication.
               </h1>
            </TransitionInview>

            <svg
               width="20"
               height="20"
               viewBox="0 0 20 20"
               fill="currentColor"
               stroke="#1f1f1ff"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>

            <h3
               className="container flex-1 underline underline-offset-4
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

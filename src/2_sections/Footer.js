import React from "react"
import { useLocation } from "@reach/router"
import TransitionPageIn from "../1_components/TransitionPageIn"
import ScrollToTop from "../1_components/ScrollToTop"

function Footer() {
   // const `location = useLocation()

   const footerItems = [
      {
         item: "Email",
         href: "mailto:iampaolotodde@gmail.com",
      },

      {
         item: "Digital art",
         href: "https://www.instagram.com/paolo__todde/",
      },

      {
         item: "LinkedIn",
         href: "https://www.linkedin.com/in/paolo-todde/",
      },
   ]
   return (
      <TransitionPageIn>
         <footer className="w-full bg-dark text-offWhite pt-10 pb-16 md:mt-0">
            <ul className="container md:grid grid-cols-16 md:items-end px-4">
               <li className="animate-bounce mb-6 md:mb-0 text-center text-hover">
                  <ScrollToTop showBelow="250" />
               </li>
               <ul className="col-start-7 col-end-16">
                  <li className="flex justify-between">
                     {footerItems.map((listItem, i) => (
                        <a key={i} rel="noopener noreferrer" target="_blank" href={listItem.href}>
                           <li className="group text-xs md:text-base lg:text-base 2lg:text-lg font-bold uppercase text-hover">
                              {listItem.item}
                           </li>
                        </a>
                     ))}
                  </li>
               </ul>
            </ul>
         </footer>
      </TransitionPageIn>
   )
}

export default Footer

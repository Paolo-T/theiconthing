import React from "react"
import { useLocation } from "@reach/router"
import TransitionPageIn from "../1_components/TransitionPageIn"
import ScrollToTop from "../1_components/ScrollToTop"

function Footer() {
   const location = useLocation()
   const fourFourPage = location.pathname === "/404"

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
            <ul className="container md:grid grid-cols-16 items-end">
               <li className="hover:text-hover animate-bounce mb-10 md:mb-0 text-center">
                  <ScrollToTop showBelow="250" />
               </li>
               <ul className="col-start-7 col-end-16">
                  <li className="flex justify-between">
                     {footerItems.map((listItem, i) => (
                        <a key={i} rel="noopener noreferrer" target="_blank" href={listItem.href}>
                           <li className="group text-md md:text-base lg:text-base 2xl:text-2xl font-bold md:pt-2 pb-1 align-baseline mb-3 md:mb-0 transition duration-100 ease-in-out underline underline-offset-4">
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

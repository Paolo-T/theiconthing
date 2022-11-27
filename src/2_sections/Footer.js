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
         item: "LinkedIn",
         href: "https://www.linkedin.com/in/paolo-todde/",
      },
      {
         item: "Digital art",
         href: "https://www.instagram.com/paolo__todde/",
      },
   ]
   return (
      <TransitionPageIn>
         <footer className={`w-full pb-20 md:mt-0 bg-primary`}>
            <ul className="container pt-6 pb-8">
               <li className="hover:text-hover  animate-bounce">
                  <ScrollToTop showBelow="250" />
               </li>
               {footerItems.map((listItem, i) => (
                  <a key={i} rel="noopener noreferrer" target="_blank" href={listItem.href}>
                     <li className="group text-xs md:text-base lg:text-base 2xl:text-2xl font-bold md:pt-2 pb-1 align-baseline mb-3 md:mb-0 transition duration-100 ease-in-out">
                        {listItem.item}
                     </li>
                  </a>
               ))}
            </ul>
         </footer>
      </TransitionPageIn>
   )
}

export default Footer

import React from "react"
import { useLocation } from "@reach/router"
import TransitionPageIn from "../components/TransitionPageIn"
import ScrollToTop from "../components/ScrollToTop"

function Footer() {
   const location = useLocation()
   const fourFourPage = location.pathname === "/404"

   const redBackground = fourFourPage ? "bg-primary" : "bg-dark"

   const footerItems = [
      {
         item: "LinkedIn",
         href: "https://www.linkedin.com/in/paolo-todde/",
      },
      {
         item: "Github",
         href: "https://github.com/Paolo-T",
      },
      {
         item: "Digital art",
         href: "https://www.instagram.com/roomzeroone/",
      },
      {
         item: "Email",
         href: "mailto:iampaolotodde@gmail.com",
      },
   ]
   return (
      <TransitionPageIn>
         <footer className={`w-full mb-1 md:mt-0 ${redBackground}`}>
            <ul
               className="container flex text-center justify-between
             border-t border-white
             pt-6 pb-8"
            >
               {footerItems.map((item, i) => (
                  <a key={i} rel="noopener noreferrer" target="_blank" href={item.href}>
                     <li className="group xl:inline-block flex text-base md:text-base font-bold mb-3 md:mb-0 hover:text-primary transition duration-100 ease-in-out">
                        {item.item}

                        <svg
                           className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out inline-block transform rotate-45 ml-1 fill-current text-primary"
                           width="10"
                           height="10"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                           stroke="text-grey"
                           xmlns="http://www.w3.org/2000/svg"
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.7"
                              d="M5 10l7-7m0 0l7 7m-7-7v18"
                           />
                        </svg>
                     </li>
                  </a>
               ))}
               <li className="hover:text-grey transition duration-200 ease-in-out animate-bounce">
                  <ScrollToTop showBelow="250" />
               </li>
            </ul>
         </footer>
      </TransitionPageIn>
   )
}

export default Footer

import React from "react"
import IconCopyright from "../icons/copyright.svg"
import ScrollToTop from "../1_components/ScrollToTop"

function Footer() {
   const footerItems = [
      {
         label: "Email",
         href: "mailto:iampaolotodde@gmail.com",
      },

      {
         label: "Digital art",
         href: "https://www.instagram.com/paolo__todde/",
      },

      {
         label: "LinkedIn",
         href: "https://www.linkedin.com/in/paolo-todde/",
      },
   ]
   return (
      <footer className="w-full text-offWhite  bg-dark pt-10 pb-16 md:mt-0">
         <div className="container grid grid-cols-16 md:grid-gap items-center px-0 md:px-4">
            <div className="order-last md:order-first col-start-1 col-end-17 md:col-end-7 flex space-x-2 items-center justify-center md:justify-start">
               <IconCopyright className="w-5 h-full text-white inline-block" />
               <p>Designed & coded</p>
            </div>

            <ul className="col-start-1 md:col-start-7 col-end-17 flex justify-between items-center">
               {footerItems.map((listItem, i) => (
                  <li key={i}>
                     <a rel="noopener noreferrer" target="_blank" href={listItem.href}>
                        <p className="group text-xs md:text-base lg:text-base 2lg:text-lg font-bold uppercase dark-text-hover">
                           {listItem.label}
                        </p>
                     </a>
                  </li>
               ))}
               <li className="animate-bounce mb-6 md:mb-0 text-center dark-text-hover">
                  <ScrollToTop showBelow="250" />
               </li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer

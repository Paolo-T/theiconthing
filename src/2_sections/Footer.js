import React from "react"
import IconCopyright from "../icons/copyright.svg"
import ScrollToTopButton from "../1_components/ScrollToTopButton"
// import IconArrow from "../icons/arrow.svg"

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
      <footer className="container text-offWhite bg-dark pt-10 pb-10 rounded-2xl overflow-hidden">
         <div className="container grid grid-cols-16 md:grid-gap">
            <div className="order-last md:order-first col-start-1 col-end-17 md:col-end-8 flex space-x-1 items-center border-t border-offWhite md:border-none pt-4 md:pt-0">
               <span className="text-base">
                  <IconCopyright className="w-5 h-full text-offWhite inline-block mr-2 md:mr-1 mb-1" />
                  Designed in{" "}
                  <a className="text-base text-grey" target="_blank" href="https://www.figma.com/">
                     Figma
                  </a>
                  , coded with{" "}
                  <a className="text-base text-grey" target="_blank" href="https://www.gatsbyjs.com/">
                     Gatsby{" "}
                  </a>
                  and{" "}
                  <a className="text-base text-grey" target="_blank" href="https://tailwindcss.com/">
                     Tailwindcss
                  </a>
                  . Deployed on{" "}
                  <a className="text-base text-grey" target="_blank" href="https://www.netlify.com/">
                     Netlify
                  </a>
               </span>
            </div>

            <ul className="col-start-1 md:col-start-9 col-end-17 flex justify-between items-center mb-6 md:mb-0">
               {footerItems.map((listItem, i) => (
                  <li key={i}>
                     <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={listItem.href}
                        className="group text-xs md:text-base lg:text-base 2lg:text-lg font-bold uppercase dark-text-hover"
                     >
                        {listItem.label}
                     </a>
                  </li>
               ))}
               <li>
                  <ScrollToTopButton showBelow="200" />
               </li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer

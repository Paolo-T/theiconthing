import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

function Navigation() {
   const location = useLocation()
   const homePage = location.pathname === "/"
   const fourFourPage = location.pathname === "/404"

   const linkColor = homePage || fourFourPage ? "text-white" : "text-dark"
   const linkHoverColor = homePage || fourFourPage ? "hover:text-dark" : "hover:text-primary"

   const homepage = location.pathname === "/"

   const navItems = [
      {
         to: "/",
         text: "Paolo Todde",
      },
      // {
      //    to: "/#about",
      //    text: "Who?",
      // },
      // {
      //    to: "/#work",
      //    text: "Work",
      // },
      {
         to: "#contact",
         text: "Contact",
      },
   ]

   return (
      <header className={`fixed z-50 w-full backdrop-blur-sm bg-transparent`}>
         <nav className="container pt-4 pb-2">
            <ul className="flex sm:space-between md:flex md:space-x-32 ">
               {navItems.map((item, i) => (
                  <Link
                     key={i}
                     to={item.to}
                     className={`transition duration-300 ease-in-out ${linkColor} hover:text-dark`}
                  >
                     <p className="inline-block md:text-base lg:text-base 2xl:text-xl font-bold md:pt-2 pb-1 align-baseline flex ">
                        {item.text}
                     </p>
                  </Link>
               ))}
            </ul>
         </nav>
      </header>
   )
}

export default Navigation

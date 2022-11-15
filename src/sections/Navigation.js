import React from "react"
import { Link } from "gatsby"
import TransitionInview from "../components/TransitionInview"
import { useLocation } from "@reach/router"

function Navigation() {
   const location = useLocation()
   const homePage = location.pathname === "/"
   const fourFourPage = location.pathname === "/404"

   // const navBackground = homePage || fourFourPage ? "bg-primary" : "bg-white"
   const linkColor = homePage || fourFourPage ? "text-white" : "text-dark"
   const linkHoverColor = homePage || fourFourPage ? "hover:text-dark" : "hover:text-primary"

   const homepage = location.pathname === "/"

   console.log(homepage)

   const navItems = [
      {
         to: "/",
         text: "Paolo Todde",
      },
      {
         to: "/#about",
         text: "Who?",
      },
      {
         to: "homepage/#work",
         text: "Work",
      },
      {
         to: "#contact",
         text: "Contact",
      },
   ]

   return (
      <header className={`fixed z-50 w-full backdrop-blur-sm bg-transparent`}>
         <TransitionInview>
            <nav className="container pt-4 pb-2">
               <ul className="flex justify-between">
                  {navItems.map((item, i) => (
                     <Link
                        key={i}
                        to={item.to}
                        className={`transition duration-300 ease-in-out ${linkColor} hover:text-dark`}
                     >
                        <p className="inline-block text-xs md:text-base lg:text-base 2xl:text-2xl font-bold md:pt-2 pb-1 align-baseline ">
                           {item.text}
                        </p>
                     </Link>
                  ))}
               </ul>
            </nav>
         </TransitionInview>
      </header>
   )
}

export default Navigation

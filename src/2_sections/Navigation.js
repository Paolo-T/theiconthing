import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

function Navigation() {
   const location = useLocation()
   const homePage = location.pathname === "/"
   const fourFourPage = location.pathname === "/404"

   // const linkColor = homePage || fourFourPage ? "text-white" : "text-dark"
   // const linkHoverColor = homePage || fourFourPage ? "hover:text-dark" : "hover:text-primary"

   const homepage = location.pathname === "/"

   const navItems = [
      {
         to: "/#about",
         text: "Who?",
      },
      {
         to: "/#work",
         text: "Work",
      },
      {
         to: "#contact",
         text: "Contact",
      },
   ]

   return (
      <header className={`fixed z-50 w-full bg-transparent`}>
         <nav className="container flex justify-between pt-6 md:pt-10 pb-2">
            <Link to="/" className="text-hover">
               <p className="text-3xl sm:text-4xl md:text-4xl lg:text-4xl 2xl:text-4xl text-serif">paolo todde</p>
            </Link>
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-16 items-end mb-1.5">
               {navItems.map((item, i) => (
                  <Link key={i} to={item.to} className="text-hover">
                     <p className="text-xs md:text-base lg:text-base 2lg:text-lg font-bold uppercase">{item.text}</p>
                  </Link>
               ))}
            </ul>
         </nav>
      </header>
   )
}

export default Navigation

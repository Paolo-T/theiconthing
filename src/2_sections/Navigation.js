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
         <nav className="container flex justify-between pt-10 pb-2">
            <Link to="/" className="text-hover">
               <p className="text-lg sm:text-2xl md:text-2xl lg:text-3xl 2xl:text-3xl text-serif font-semibold">
                  /ˈpa.o.lo 'to.dde/
               </p>
            </Link>
            <ul className="flex space-x-2 md:space-x-6 items-center">
               {navItems.map((item, i) => (
                  <Link key={i} to={item.to} className="text-hover">
                     <p className="text-sm md:text-base lg:text-base 2xl:text-xl font-bold ">{item.text}</p>
                  </Link>
               ))}
            </ul>
         </nav>
      </header>
   )
}

export default Navigation

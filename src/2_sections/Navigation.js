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
      <header className={`fixed z-50 w-full backdrop-blur bg-transparent`}>
         <nav className="container flex justify-between pt-10 pb-2">
            <Link to="/" className="text-hover">
               <p className="md:text-base lg:text-base 2xl:text-2xl font-bold">/ˈpa.o.lo 'to.dde /</p>
            </Link>
            <ul className="flex space-x-3 md:space-x-6 align-baseline">
               {navItems.map((item, i) => (
                  <Link key={i} to={item.to} className="text-hover">
                     <p className="md:text-base lg:text-base 2xl:text-xl font-bold">{item.text}</p>
                  </Link>
               ))}
            </ul>
         </nav>
      </header>
   )
}

export default Navigation

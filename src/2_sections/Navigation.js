import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

function Navigation() {
   const location = useLocation()
   // const homePage = location.pathname === "/"

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
               <p className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl 2xl:text-6xl text-serif text-primary primary-text-hover">
                  pt.
               </p>
            </Link>
            <ul className="flex space-x-4 md:space-x-6 lg:space-x-[5.3em] items-end mb-1.5">
               {navItems.map((item, i) => (
                  <Link to={item.to} key={i} className="dark-text-hover">
                     <p className="text-xs md:text-base lg:text-base 2lg:text-lg font-bold uppercase">{item.text}</p>
                  </Link>
               ))}
            </ul>
         </nav>
      </header>
   )
}

export default Navigation

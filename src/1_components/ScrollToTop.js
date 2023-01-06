import React, { useState, useEffect } from "react"
import IconArrow from "../icons/arrow.svg"

const ScrollToTop = (showBelow) => {
   const [show, setShow] = useState(showBelow ? false : true)

   const handleScroll = () => {
      if (window.pageYOffset > showBelow) {
         if (!show) setShow(true)
      } else {
         if (show) setShow(false)
      }
   }

   useEffect(() => {
      if (showBelow) {
         window.addEventListener(`scroll`, handleScroll)
         return () => window.removeEventListener(`scroll`, handleScroll)
      }
   }, [])

   const handleClick = () => {
      window[`scrollTo`]({ top: 0 })
   }

   return (
      <button
         name="Back to top of the page"
         className="bg-transparent ease-in-out transform hover:-translate-y-1 transition duration-200 focus:outline-none inline-block mx-auto md:mx-2 border border-offWhite pt-2 pb-3 pl-2 pr-3 rounded-full"
         onClick={handleClick}
      >
         <IconArrow className="rotate-360 " />
      </button>
   )
}

export default ScrollToTop

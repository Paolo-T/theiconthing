import React, { useState, useEffect } from "react"

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
         className="bg-transparent ease-in-out transform hover:-translate-y-1 transition duration-200 focus:outline-none  inline-block mx-auto md:mx-0"
         onClick={handleClick}
      >
         <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            stroke="currentColor"
         >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
         </svg>
      </button>
   )
}

export default ScrollToTop

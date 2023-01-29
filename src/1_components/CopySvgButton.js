import React, { useState } from "react"

const CopySVGButton = ({ children }, icon) => {
   const [copied, setCopied] = useState(false)

   const handleClick = () => {
      navigator.clipboard.writeText()
      setCopied(true)
   }

   return (
      <button onClick={handleClick}>
         {copied ? "Copied!" : "Copy SVG Code"}
         {children}
      </button>
   )
}

export default CopySVGButton

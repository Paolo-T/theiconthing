import React, { useState, useEffect } from "react"
import { GatsbyImage } from "gatsby-plugin-image"

const Lightbox = ({ images }) => {
   const [showLightbox, setShowLightbox] = useState(false)
   const [selectedImage, setSelectedImage] = useState(null)

   // useEffect(() => {
   //    if (showLightbox) {
   //       document.body.classList.add("no-scroll")
   //    } else {
   //       document.body.classList.remove("no-scroll")
   //    }
   // }, [showLightbox])

   const handleClick = (image) => {
      setSelectedImage(image)
      setShowLightbox(true)
   }

   const handleClose = () => {
      setSelectedImage(null)
      setShowLightbox(false)
   }

   return (
      <div>
         {images.map((image, index) => (
            <div onClick={() => handleClick(image)}>
               <GatsbyImage
                  key={index}
                  alt={"description"}
                  className="mb-3 md:mb-7 cursor-pointer"
                  image={image.childImageSharp.gatsbyImageData}
                  // onClick={() => handleClick(image)}
                  // onClick={() => console.log("Clicked")}
               />
            </div>
         ))}

         {showLightbox && (
            <div className="fixed h-screen inset-0 bg-dark/90 overflow-auto">
               <div className="relative mx-auto max-w-sm mt-10">
                  <GatsbyImage image={selectedImage.childImageSharp.gatsbyImageData} className="mx-auto" />
                  <button className="top-50 right-0 m-4 text-white font-medium" onClick={handleClose}>
                     Close
                  </button>
               </div>
            </div>
         )}
      </div>
   )
}

export default Lightbox

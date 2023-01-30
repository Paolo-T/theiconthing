import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const IconsGallery = () => {
   const data = useStaticQuery(graphql`
      query {
         allFile(filter: { extension: { eq: "svg" }, sourceInstanceName: { eq: "iconsGallery" } }) {
            edges {
               node {
                  publicURL
                  name
               }
            }
         }
      }
   `)

   return (
      <>
         <section className="container-content mx-auto grid grid-cols-5 gap-6 spacing-bottom">
            {data.allFile.edges.map(({ node }) => (
               <a href={node.publicURL} download>
                  <div className="flex flex-col space-y-4 justify-center items-center w-full h-full py-10 px-2  border border-gray-300 rounded-2xl hover:bg-neutral-100">
                     <img key={node.name} src={node.publicURL} alt={node.name} className="inline-block w-[32px]" />
                     <span className="text-grey inline-block">{node.name}</span>
                  </div>
               </a>
            ))}
         </section>
      </>
   )
}

export default IconsGallery

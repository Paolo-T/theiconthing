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
         <section className="container-content mx-auto grid grid-cols-6 grid-gap">
            {data.allFile.edges.map(({ node }) => (
               <div className="p-8 border border-gray-300 rounded-2xl hover:bg-neutral-100">
                  {" "}
                  <a href={node.publicURL} className="flex flex-col justify-center" download>
                     {" "}
                     <img key={node.name} src={node.publicURL} alt={node.name} />
                     <span className="text-grey">{node.name}</span>
                  </a>
               </div>
            ))}
         </section>
      </>
   )
}

export default IconsGallery

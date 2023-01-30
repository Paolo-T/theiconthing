import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const IconsGallery = () => {
   const data = useStaticQuery(graphql`
      query {
         allFile(filter: { extension: { eq: "svg" }, sourceInstanceName: { eq: "iconsGallery" } }) {
            totalCount
            edges {
               node {
                  publicURL
                  name
               }
            }
         }
      }
   `)
   {
      console.log(data)
   }

   return (
      <>
         <section className="container mx-auto">
            <p className="text-right mb-6">{data.allFile.totalCount} icons available</p>
            <div className="grid md:grid-col-3 md:grid-col-4 xl:grid-cols-7 gap-7">
               {data.allFile.edges.map(({ node }) => (
                  <a key={node.name} href={node.publicURL} download>
                     <div className="py-8 px-2 rounded-2xl hover:bg-neutral-200 text-center">
                        <img src={node.publicURL} alt={node.name} className="w-[32px] block mx-auto mb-3" />
                        <p className="text-grey inline-block text-sm">{node.name}</p>
                     </div>
                  </a>
               ))}
            </div>
         </section>
      </>
   )
}

export default IconsGallery

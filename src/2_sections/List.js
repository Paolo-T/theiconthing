import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useLocation } from "@reach/router"

const ListItem = ({ key, href, imgSrc, alt, iconName }) => {
   const [clickCount, setClickCount] = useState(0)
   const location = useLocation()

   {
      console.log(key)
   }

   const handleClick = () => {
      setClickCount(clickCount + 1)
   }

   return (
      <ul key={key}>
         <a href={`${location.href}${href}`} onClick={handleClick} download>
            <div className="py-8 px-2 rounded-2xl hover:bg-neutral-200 text-center">
               <img src={`${location.href}${imgSrc}`} alt={alt} className="w-[32px] block mx-auto mb-4" />
               <p className="text-grey inline-block text-sm">{iconName}</p>
               <span className="text-grey inline-block text-sm">Downloads {clickCount}</span>
            </div>
         </a>
      </ul>
   )
}

const List = () => {
   const data = useStaticQuery(graphql`
      query {
         site {
            siteMetadata {
               siteUrl
            }
         }
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

   // {
   //    data.allFile.edges.map(({ node: { publicURL, name } }) => {
   //       console.log(publicURL)
   //    })
   // }
   return (
      <section className="container mx-auto">
         <p className="text-right mb-6">{data.allFile.totalCount} icons available</p>
         <div className="grid md:grid-col-3 md:grid-col-4 xl:grid-cols-7 gap-7">
            {data.allFile.edges.map(({ node: { publicURL, name } }) => (
               <ListItem key={name} href={publicURL} imgSrc={publicURL} alt={name} iconName={name} />
            ))}
         </div>
      </section>
   )
}

export default List

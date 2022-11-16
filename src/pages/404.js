import React from "react"
import SEO from "../components/Seo"
import { Link } from "gatsby"
import TransitionPageIn from "../components/TransitionPageIn"

function NotFoundPage() {
   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `UX Design`,
               `User Experience`,
               `Web Design`,
               `Product Design`,
               `Portfolio`,
               `Brighton`,
               `UK`,
            ]}
            title="404: Not found"
         />

         <TransitionPageIn>
            <div className="h-screen pt-32 sm:pt-32 bg-primary">
               <div className="container">
                  <h1 className="lg:w-12/12 xl:w-12/12 2xl:w-12/12 mb-12 sm:mb-12 md:mb-20 lg:mb-16 xl:mb-16 md:mt-20 xl:mt-32 leading-less xl:leading-tight">
                     {" "}
                     Looks like the page you are looking for is not here...
                  </h1>

                  <h2 className="flex-1 underline underline-offset-4 transition duration-100 ease-in-out hover:text-dark">
                     <Link to="/"> Let's go home!</Link>
                  </h2>
               </div>
            </div>
         </TransitionPageIn>
      </>
   )
}

export default NotFoundPage

import React from "react"
import SEO from "../1_components/Seo"
import { Link } from "gatsby"
import TransitionPageIn from "../1_components/TransitionPageIn"

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
         <section className="w-full h-screen bg-offWhite text-left">
            <TransitionPageIn>
               <div className="container md:grid grid-cols-16 grid-row pt-32 md:pt-72">
                  <h1 className="col-start-1 col-end-12 font-hero mb-8 sm:mb-12 md:mb-16 lg:mb-20">
                     {" "}
                     Looks like the page you are looking for is not here...
                  </h1>
                  <h2 className="row-start-2 col-span-3 underline underline-offset-4 uppercase text-hover">
                     <Link to="/"> Let's go home!</Link>
                  </h2>
               </div>
            </TransitionPageIn>
         </section>
      </>
   )
}

export default NotFoundPage

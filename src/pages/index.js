import React from "react"
import SEO from "../1_components/Seo"
import Hero from "../2_sections/Hero"
import ProjectsTiles from "../2_sections/ProjectsTiles"
import About from "../2_sections/About"
import SideProjects from "../2_sections/SideProjects"
import Recommendations from "../2_sections/Recommendations"
import Contact from "../2_sections/Contact"

function Home() {
   return (
      <>
         <SEO
            keywords={[`UI Design`, `UX Design`, `User Experience`, `Web Design`, `Product Design`, `Portfolio`]}
            title="Paolo Todde | Product Designer | Visual Design"
         />
         <div className="">
            <div className="container h-full">
               <Hero />
               <ProjectsTiles />
               <About />
               <SideProjects />
               <Recommendations />
               <Contact />
            </div>
         </div>
      </>
   )
}

export default Home

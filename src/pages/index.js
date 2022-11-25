import React from "react"
import SEO from "../1_components/Seo"
import ImgTiles from "../2_sections/ImgTiles"
import About from "../2_sections/About"
import Recommendations from "../2_sections/Recommendations"
import SideProjects from "../2_sections/SideProjects"
import Hero from "../2_sections/Hero"
import Contact from "../2_sections/Contact"

function Home() {
   return (
      <>
         <SEO
            keywords={[`UI Design`, `UX Design`, `User Experience`, `Web Design`, `Product Design`, `Portfolio`]}
            title="Paolo Todde | User Interface Designer | Visual Designe"
         />
         <div>
            <Hero />
            <ImgTiles />
            <About />
            <Recommendations />
            <SideProjects />
            <Contact />
         </div>
      </>
   )
}

export default Home

import React from "react"
import SEO from "../components/Seo"
import TransitionPageIn from "../components/TransitionPageIn"
import TransitionInview from "../components/TransitionInview"
import ImgTiles from "../sections/ImgTiles"
import About from "../sections/About"
import Recommendations from "../sections/Recommendations"
import SideProjects from "../sections/SideProjects"
import Hero from "../sections/Hero"
import Contact from "../sections/Contact"

function Home() {
   return (
      <>
         <SEO
            keywords={[`UI Design`, `UX Design`, `User Experience`, `Web Design`, `Product Design`, `Portfolio`]}
            title="Paolo Todde | User Interface Designer | Visual Designe"
         />
         <div>
            <TransitionPageIn>
               <TransitionInview>
                  <Hero />
               </TransitionInview>

               <ImgTiles />
               <About />
               <Recommendations />
               <SideProjects />
               <Contact />
            </TransitionPageIn>
         </div>
      </>
   )
}

export default Home

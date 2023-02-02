import React from "react"
import SEO from "../1_components/Seo"
import Hero from "../2_sections/Hero"
// import ProjectsTiles from "../2_sections/ProjectsTiles"
// import About from "../2_sections/About"
// import SideProjects from "../2_sections/SideProjects"
// import Articles from "../2_sections/Articles"
// import Recommendations from "../2_sections/Recommendations"
// import Contact from "../2_sections/Contact"
import TransitionInview from "../1_components/TransitionInview"
import List from "../2_sections/List"

function Home() {
   return (
      <>
         <SEO
            keywords={[
               `UI Design`,
               `User Interface design`,
               `Interaction design`,
               `Prototyping`,
               `UX Design`,
               `UX/UI`,
               `Visual Design`,
               `User Experience`,
               `User centred`,
               `Web Design`,
               `Product Design`,
               `Wireframes`,
               `Usability testing`,
               `Portfolio`,
               `App`,
               `Website`,
               `Photography`,
               `Photo manipulation`,
               `Photos`,
               `Illustration`,
               `Digital art`,
               `Design thinking`,
               `Figma`,
               `Sketch`,
               `Adobe Photoshop`,
               `Adobe Illustrator`,
               `Tailwind css`,
               `Portfolio`,
            ]}
            title="Icon thing"
         />

         <div className="container h-full">
            <Hero />
            <List />
            {/* <About />
               <Articles />
               <Recommendations />
               <Contact />
               <SideProjects /> */}
         </div>
      </>
   )
}

export default Home

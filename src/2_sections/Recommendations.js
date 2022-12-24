import React from "react"
import IconBubble from "../icons/speechbubble.svg"
import TransitionInview from "../1_components/TransitionInview"

function Reccomendations() {
   const reccomendations = [
      {
         id: "3df9e28f-cda5-454f-8a9a-8a3b9r9h77e46",
         name: "Ana Abrantes",
         JobTitle: "Senior UI Designer @ MVF Global",
         description:
            "I worked in the same team as Paolo, we collaborated on several projects, and can say for sure it was the best collaboration I ever had!\n\nWhen I gave feedback on his work and questioned some of the decisions, Paolo was always welcoming of different perspectives and willing to iterate more on his work until we found the right solution.\n\nSome of the most epic projects that Paolo worked on were the Eco Experts website redesign which had several challenges and different stakeholders giving input on designs but he was able to manage the visual direction and expectations really well. Another big contribution was the creation of our first-ever Multi-brand Design System, which he built from the ground up, having into consideration the scalability of our products in the future.\n\nApart from being an incredible designer, Paolo is also an amazing person, always available to help and accept new challenges, bringing enthusiasm and a friendly smile to all the meetings we had :)",
      },
      {
         id: "d82a67e2-544a-40f2-bb16-ary6330a0d75",
         name: "Rebecca Harrison",
         JobTitle: "Creative Director @ Brandwatch",
         description:
            "Paolo has been a great part of our team at Brandwatch. Helps create a brilliant team atmosphere; he brings a blend of calm determination and a real motivation for learning which in many ways encourages other to follow suit.\n\nI have no doubt that Paolo will continue on a path of growth wherever he decides to go. It’s been a real pleasure to both collaborate with and manage Paolo. I’m glad our paths crossed and no doubt they will again.",
      },
      {
         id: "3",
         name: "Pete Rundle",
         JobTitle: "Senior Developer & Designer @ Brandwatch",
         description:
            "I was Paolo’s line manager for around 2 years. During that he was always pushing to improve, and his enthusiasm for both UI/UX and code was always tangible. He designed and coded many of our design system’s front-end components, which were always slick and on brand. As well as code, he also managed and maintained the team Figma library - enabling other designers to use our front-end components and speak the same language as developers.",
      },
      {
         id: "2d0to893-51d6-43b8-836c-0ef729646974",
         name: "Matt Fletcher",
         JobTitle: "Senior Designer @ Brandwatch",
         description:
            "Paolo is not only an incredibly talented designer but also a humble and brilliant human being. I thoroughly enjoyed working with and learning from him. I can’t recommend Paolo enough!",
      },
      {
         id: "bd13d25a-8cb4-497e-8fc8-4539b55o93e5",
         name: "Don Steyn",
         JobTitle: "Art Director @ IronDog Studio",
         description:
            "Paolo is a great to work with and brings a lightheartedness to the work place. Motivated, talented, forward thinking and has a great work ethic. It was a pleasure working with him.",
      },
      {
         id: "96fc36f3-e95c-48ba-8d34-zf8db6804be4",
         name: "Margarita Cruz",
         JobTitle: "Head Of Operations @ 1X2 Network",
         description:
            "Paolo is a highly skilled Designer. He is very creative, honest, reliable and approachable to work with. Full of creative energy, he thrives on any challenge, making him to get work delivered with thought, insight, speed and most importantly, always to a high standard. A pleasure to work with Paolo.",
      },
      // {
      //    id: "632b0366l-5034-4ec0-8673-319c2305d0c0",
      //    name: "Monica Salis",
      //    JobTitle: "CFO @ Omnia International",
      //    description:
      //       "Paolo provided an excellent service in creating and refining our logo according to our request. Very professional, not only he understood exactly what our needs were, but he did it in a very short time. Absolutely recommended, we will be using him more and more in the future. Thanks Paolo!",
      // },
   ]

   return (
      <section className="grid grid-cols-16 md:grid-gap spacing-top spacing-bottom">
         <div className="col-start-1 col-end-17 md:col-start-4 lg:col-end-16 mb-6 md:mb-0 text-center md:text-left">
            <h2>Kind recommendations</h2>
            <p>From amazingly talented humans</p>
         </div>

         <div className="w-full col-start-1 col-end-17 xl:col-start-5 lg:col-end-17">
            <div className="sm:grid grid-cols-2 sm:grid-gap place-content-stretch text-center">
               {reccomendations.map((recommendation) => (
                  <TransitionInview key={recommendation.id}>
                     {
                        <div
                           key={recommendation.id}
                           className="h-full border border-offWhite rounded-xl px-4 md:px-8 lg:px-8 py-7 md:py-14 lg:py-18 mb-6 md:mb-0"
                        >
                           <div className="flex space-x-2 text-primary justify-center">
                              <h5>{recommendation.name}</h5>
                              <IconBubble />
                           </div>
                           <h4 className="text-xs md:text-base mb-6">{recommendation.JobTitle}</h4>

                           <p className="md:leading-7 max-w-prose" style={{ whiteSpace: "pre-wrap" }}>
                              <span className="text-primary text-2xl">“</span>
                              {recommendation.description}
                              <span className="text-primary text-2xl">”</span>
                           </p>
                        </div>
                     }
                  </TransitionInview>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Reccomendations

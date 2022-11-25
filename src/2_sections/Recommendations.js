import React from "react"
import TransitionInview from "../1_components/TransitionInview"

function Reccomendations() {
   const columnOne = [
      {
         id: "1",
         name: "Rebecca Harrison",
         JobTitle: "Creative Director – Brandwatch",
         description:
            "Paolo has been a great part of our team at Brandwatch. Helps create a brilliant team atmosphere; he brings a blend of calm determination and a real motivation for learning which in many ways encourages other to follow suit.\n\nI have no doubt that Paolo will continue on a path of growth wherever he decides to go. It’s been a real pleasure to both collaborate with and manage Paolo. I’m glad our paths crossed and no doubt they will again.",
      },
      {
         id: "2",
         name: "Matt Fletcher",
         JobTitle: "Senior Designer – Brandwatch",
         description:
            "Paolo is not only an incredibly talented designer but also a humble and brilliant human being. I thoroughly enjoyed working with and learning from him. I can’t recommend Paolo enough!",
      },
      {
         id: "6",
         name: "Don Steyn",
         JobTitle: "Art Director – IronDog Studio",
         description:
            "Paolo is a great person to work with and brings a lightheartedness to the work place. He is motivated, talented, forward thinking and has a great work ethic. It was a pleasure working with him.",
      },
   ]

   const columnTwo = [
      {
         id: "4",
         name: "Margarita Cruz",
         JobTitle: "Head Of Operations – 1X2 Network",
         description:
            "Paolo is a highly skilled Designer. He is very creative, honest, reliable and approachable to work with. Full of creative energy, he thrives on any challenge, making him to get work delivered with thought, insight, speed and most importantly, always to a high standard. A pleasure to work with Paolo.",
      },
      {
         id: "3",
         name: "Pete Rundle",
         JobTitle: "Senior Developer & Designer – Brandwatch",
         description:
            "I was Paolo’s line manager for around 2 years. During that time Paolo was always pushing to improve, and his enthusiasm for both UI/UX and code was always tangible. He designed and coded many of our design system’s front-end components, which were always slick and on brand. As well as code, he also managed and maintained the team Figma library - enabling other designers to use our front-end components and speak the same language as developers.\n\nPaolo is a great person to work with day to day - positive, down to earth and extremely humble. Looking forward to seeing what Paolo will do next!",
      },
      {
         id: "5",
         name: "Monica Salis",
         JobTitle: "CFO, Omnia International",
         description:
            "Paolo provided an excellent service in creating and refining our logo according to our request. Very professional, not only he undrestood exactly what our needs were, but he did it in a very short time. Absolutely recommended, we will be using him more and more in the future. Thanks Paolo!",
      },
   ]

   return (
      <section className="w-full bg-dark pt-9 md:pt-0 md:pb-24">
         <div className="container">
            <h2 className="text-xl md:text-4xl lg:text-4xl text-center md:text-left mb-1 lg:mb-3">Recommendations</h2>
            <p
               className="text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-4xl text-grey
         text-center md:text-left mb-10 lg:mb-14"
            >
               From amazingly talented collaborators
            </p>
            <div className="md:m-0 lg:flex justify-between mb-10 lg:space-x-14">
               <div className="flex-1 md:mt-20 md_2:mt-10">
                  {columnOne.map((recommendation, i) => (
                     <TransitionInview key={recommendation.id}>
                        {
                           <div className="bg-lessDark px-8 py-7 md:px-12 lg:px-18 md:py-14 lg:py-18 mb-6 lg:mb-16">
                              <div className="flex space-x-2">
                                 <h5>{recommendation.name}</h5>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 md:h-6 md:w-6 md:mt-o.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2.2"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                 </svg>
                              </div>
                              <h4 className="text-xs md:text-base text-grey mb-6">{recommendation.JobTitle}</h4>

                              <p className="md:leading-7 max-w-prose" style={{ whiteSpace: "pre-wrap" }}>
                                 <span className="text-grey">“</span>
                                 {recommendation.description}
                                 <span className="text-grey">”</span>
                              </p>
                           </div>
                        }
                     </TransitionInview>
                  ))}
               </div>
               <div className="flex-1">
                  {columnTwo.map((recommendation, i) => (
                     <TransitionInview key={recommendation.id}>
                        {
                           <div className="bg-lessDark px-8 py-7 md:px-12 lg:px-18 md:py-14 lg:py-18 mb-6 lg:mb-16">
                              <div className="flex space-x-2">
                                 <h5>{recommendation.name}</h5>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 md:h-6 md:w-6 md:mt-o.5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    stroke-width="2.2"
                                 >
                                    <path
                                       stroke-linecap="round"
                                       stroke-linejoin="round"
                                       d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                    />
                                 </svg>
                              </div>
                              <h4 className="text-grey mb-6">{recommendation.JobTitle}</h4>

                              <p className="md:leading-7 max-w-prose" style={{ whiteSpace: "pre-wrap" }}>
                                 <span className="text-grey">“</span>
                                 {recommendation.description}
                                 <span className="text-grey">”</span>
                              </p>
                           </div>
                        }
                     </TransitionInview>
                  ))}
               </div>
            </div>
         </div>
      </section>
   )
}

export default Reccomendations

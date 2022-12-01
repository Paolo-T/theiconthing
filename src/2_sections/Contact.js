import React from "react"
import IconLinkedin from "../icons/linkedin.svg"
import IconTwitter from "../icons/twitter.svg"
import IconInstagram from "../icons/instagram.svg"
import IconMail from "../icons/mail.svg"

function Contact() {
   return (
      <section id="contact" className="group pb-32">
         <div className="md:grid grid-cols-16 grid-gap">
            <div className="col-start-7 md:col-end-13">
               <h4 className="mb-4 uppercase">Say Hello</h4>
               <a rel="noopener noreferrer" target="_blank" href="mailto:iampaolotodde@gmail.com">
                  <h2 className="mb-8 md:mb-10">
                     Always open to new collaborations.
                     <span className="text-serif text-primary hover:text-dark text-2xl md:text-4xl">
                        {" "}
                        Let's chat! :)
                     </span>
                  </h2>
               </a>

               <div className="md:mx-0 md:w-4/12 flex items-center space-x-16 md:justify-between ">
                  <a
                     className="hover:text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://www.linkedin.com/in/paolo-todde/"
                  >
                     <IconLinkedin />
                  </a>
                  <a
                     className="hover:text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://twitter.com/roomzeroone"
                  >
                     <IconTwitter />
                  </a>
                  <a
                     className="hover:text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://www.instagram.com/paolo__todde/"
                  >
                     <IconInstagram />
                  </a>
                  <a
                     className="hover:text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="mailto:iampaolotodde@gmail.com"
                  >
                     <IconMail />
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contact

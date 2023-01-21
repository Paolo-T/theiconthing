import React from "react"
import IconLinkedin from "../icons/linkedin.svg"
// import IconTwitter from "../icons/twitter.svg"
import IconInstagram from "../icons/instagram.svg"
import IconMail from "../icons/mail.svg"

function Contact() {
   return (
      <section id="contact" className="group spacing-top pb-20 md:pb-40">
         <div className="xl:grid grid-cols-16 grid-gap">
            <div className="col-start-6 md:col-end-12 lg:col-end-12 justify-center text-center">
               <h4 className="mb-4 uppercase">Say Hello</h4>
               <a rel="noopener noreferrer" target="_blank" href="mailto:iampaolotodde@gmail.com">
                  <h2 className="mb-8 md:mb-10 leading-normal">
                     Always open to new collaborations.
                     <span className="text-primary primary-text-hover text-2xl md:text-4xl"> Let's chat!</span>
                  </h2>
               </a>

               <div className="flex items-center justify-around">
                  <a
                     className="dark-text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://www.linkedin.com/in/paolo-todde/"
                  >
                     <IconLinkedin alt="link to LinkedIn profile" />
                  </a>
                  {/* <a
                     className="dark-text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://twitter.com/roomzeroone"
                  >
                     <IconTwitter />
                  </a> */}
                  <a
                     className="dark-text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="https://www.instagram.com/paolo__todde/"
                  >
                     <IconInstagram alt="link to Instagram profile" />
                  </a>
                  <a
                     className="dark-text-hover"
                     rel="noopener noreferrer"
                     target="_blank"
                     href="mailto:iampaolotodde@gmail.com"
                  >
                     <IconMail alt="Send me an email" />
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}

export default Contact

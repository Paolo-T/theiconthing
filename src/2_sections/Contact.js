import React from "react"

function Contact() {
   return (
      <div id="contact" className="container-content group bg-primary pt-10 pb-10 md:pb-28">
         <h2 className="mb-4 uppercase">Say Hello</h2>
         <h3>
            <a rel="noopener noreferrer" target="_blank" href="mailto:iampaolotodde@gmail.com">
               I'd love to collaborate with you. Let's talk!
            </a>
         </h3>

         <div className="md:mx-0 md:w-4/12 flex items-center justify-between">
            <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/paolo-todde/">
               <svg
                  viewBox="0 0 24 24"
                  className="w-6 md:w-7 hover:-translate-y-1.5 duration-300 ease-in-out origin-center hover:rotate-12"
                  fill="dark"
               >
                  <path d="M5.2 7.1c-1.2.1-2.1-.8-2.2-2V5c0-1.1.9-2 2.1-2h.1c1.1-.1 2.2.7 2.3 1.9S6.7 7 5.6 7.1h-.4zm1.9 13.6h-4v-12h4v12zm14.3 0h-4v-6.4c0-1.6-.6-2.7-2-2.7-.9 0-1.7.6-2 1.4-.1.3-.1.6-.1 1v6.6h-4c.1-10.9 0-12 0-12h4v1.7a3.8 3.8 0 013.6-2c2.6 0 4.6 1.7 4.6 5.4l-.1 7z"></path>
               </svg>
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/roomzeroone">
               <svg
                  viewBox="0 0 24 24"
                  className="w-6 md:w-7 hover:-translate-y-1.5 duration-300 ease-in-out origin-center hover:rotate-12"
                  fill="dark"
               >
                  <path d="M20.19 8.7v.53a11.63 11.63 0 01-11.7 11.71 11.6 11.6 0 01-6.32-1.85 6.57 6.57 0 001 .05 8.24 8.24 0 005.11-1.75 4.13 4.13 0 01-3.85-2.86 6.85 6.85 0 00.78.07 5 5 0 001.09-.14 4.12 4.12 0 01-3.31-4v-.05a4.32 4.32 0 001.86.52 4.13 4.13 0 01-1.28-5.55 11.69 11.69 0 008.49 4.31 4.29 4.29 0 01-.1-.94 4.12 4.12 0 017.12-2.82 8.19 8.19 0 002.61-1 4.1 4.1 0 01-1.81 2.27 8.07 8.07 0 002.37-.63 8.87 8.87 0 01-2.06 2.13z"></path>
               </svg>
            </a>

            <a rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/paolo__todde/">
               <svg
                  viewBox="0 0 24 24"
                  className="w-6 md:w-7 hover:-translate-y-1.5 duration-300 ease-in-out origin-center hover:rotate-12"
                  fill="dark"
               >
                  <path d="M21.56 16A5.72 5.72 0 0120 20a5.72 5.72 0 01-4 1.56c-1.33.07-2.64.06-4 .06s-2.64 0-4-.06A5.72 5.72 0 014 20a5.72 5.72 0 01-1.56-4c-.07-1.33-.06-2.64-.06-4s0-2.64.06-4A5.72 5.72 0 014 4a5.72 5.72 0 014-1.56c1.33-.07 2.64-.06 4-.06s2.64 0 4 .06A5.72 5.72 0 0120 4a5.72 5.72 0 011.56 4c.07 1.33.06 2.64.06 4s.01 2.64-.06 4zM6.33 4.5a3.18 3.18 0 00-1.11.72 3.13 3.13 0 00-.72 1.11C4 7.59 4.11 10.6 4.11 12s-.11 4.41.39 5.67a3.17 3.17 0 001.83 1.83c1.26.5 4.27.39 5.67.39s4.41.11 5.67-.39a3.23 3.23 0 001.83-1.83c.5-1.26.39-4.27.39-5.67s.11-4.41-.39-5.67a3.25 3.25 0 00-1.83-1.83C16.41 4 13.4 4.11 12 4.11S7.59 4 6.33 4.5zM12 16.94A4.94 4.94 0 1116.93 12 4.93 4.93 0 0112 16.94zm0-8.15A3.21 3.21 0 1015.21 12 3.23 3.23 0 0012 8.79zM17.14 8a1.16 1.16 0 111.15-1.15A1.16 1.16 0 0117.14 8z"></path>
               </svg>
            </a>
            <a rel="noopener noreferrer" target="_blank" href="mailto:iampaolotodde@gmail.com">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 md:w-7 hover:-translate-y-1.5 duration-300 ease-in-out origin-center hover:rotate-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="dark"
                  strokeWidth="1.7"
               >
                  <path
                     stroke-linecap="round"
                     stroke-linejoin="round"
                     d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
               </svg>
            </a>
         </div>
      </div>
   )
}

export default Contact

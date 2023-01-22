import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Navigation from "../2_sections/Navigation"
import Footer from "../2_sections/Footer"
import CookieConsent from "../1_components/CookieConsent"
import ScrolltoTopOfPage from "../1_components/ScrolltoTopOfPage.js"

function Layout({ children }) {
   return (
      <div className="w-full relative">
         <ScrolltoTopOfPage />
         <CookieConsent />
         <Navigation />
         <main className="w-full">{children}</main>
         <Footer />
      </div>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout

import PropTypes from "prop-types"
import React from "react"
import Navigation from "../2_sections/Navigation"
import Footer from "../2_sections/Footer"

function Layout({ children }) {
   return (
      <div className="w-full relative">
         <Navigation />
         <main>{children}</main>
         <Footer />
      </div>
   )
}

Layout.propTypes = {
   children: PropTypes.node.isRequired,
}

export default Layout

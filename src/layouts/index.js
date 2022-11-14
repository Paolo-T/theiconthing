import PropTypes from "prop-types"
import React from "react"
import Navigation from "../sections/Navigation"
import Footer from "../sections/Footer"

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

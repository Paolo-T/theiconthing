import * as React from "react"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieIcon from "../icons/cookie.svg"

function isBrowser() {
   return typeof window !== "undefined"
}

function getValue(key, defaultValue) {
   return isBrowser() && window.localStorage.getItem(key) ? JSON.parse(window.localStorage.getItem(key)) : defaultValue
}

function setValue(key, value) {
   window.localStorage.setItem(key, JSON.stringify(value))
}

function useStickyState(defaultValue, key) {
   const [value, setter] = React.useState(() => {
      return getValue(key, defaultValue)
   })

   React.useEffect(() => {
      setValue(key, value)
   }, [key, value])

   return [value, setter]
}

const CookieConsent = () => {
   const location = useLocation()
   if (isBrowser()) {
      initializeAndTrack(location)
   }

   const [bannerHidden, setBannerHidden] = useStickyState(false, "consentCookieHidden")

   const EnableAnalytics = () => {
      document.cookie = "gatsby-gdpr-google-analytics=true"
      setBannerHidden(true)
   }

   const CloseBanner = () => {
      setBannerHidden(true)
   }

   return (
      <>
         {!bannerHidden && (
            <div className="z-50 w-auto bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-dark/60 text-center fixed py-2.5 px-6 rounded-t-md">
               <div className="flex space-x-2 justify-center items-center">
                  <CookieIcon className="w-6 h-6" />
                  <span>I use cookies to improve your experience on my website.</span>
                  <button onClick={CloseBanner} className="underline underline-offset-4 px-1">
                     Not today
                  </button>
                  <span className="mr-0"> - </span>
                  <button onClick={EnableAnalytics} className="underline underline-offset-4 text-green-500">
                     OK
                  </button>
               </div>
            </div>
         )}
      </>
   )
}

export default CookieConsent

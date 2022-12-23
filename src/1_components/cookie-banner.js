import React from "react"
import { useLocation } from "@reach/router"
import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"
import CookieIcon from "../icons/cookie.svg"
import Button from "./Button"

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
            <div className="z-50 w-full xl:w-auto bottom-0 left-1/2 -translate-x-1/2 backdrop-blur-sm bg-dark/80 text-center fixed py-3 md:py-2.5 px-2 md:px-6 rounded-t-md text-sm md:text-base leading-less">
               <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 justify-center items-center">
                  <CookieIcon className="w-6 h-6" />
                  <span className="font-sans text-sm md:text-base leading-some">
                     I use cookies to improve your experience on this website.
                  </span>
                  <div>
                     <Button
                        label="Not today"
                        onClick={CloseBanner}
                        noBorder={true}
                        labelSmall={true}
                        underlined={true}
                        customClass={"primary-text-hover"}
                     />
                     <span className="px-1 "> – </span>
                     <Button
                        label="I'm ok with cookies"
                        onClick={EnableAnalytics}
                        noBorder={true}
                        labelSmall={true}
                        underlined={true}
                        customClass={"text-green-400 primary-text-hover"}
                     />
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

export default CookieConsent

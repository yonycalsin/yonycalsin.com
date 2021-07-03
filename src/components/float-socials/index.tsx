import * as React from 'react'

import { socialLinks } from 'utils/constants'

const Item = ({ children, href }) => (
   <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="transition-all border-b-2 border-transparent hover:border-blue-600 hover:text-blue-500 no-underline"
   >
      {children}
   </a>
)

export const FloatSocials = () => {
   return (
      <div className="fixed bottom-2 left-2 md:bottom-4 md:left-4 hidden lg:block">
         <div className="flex flex-col space-y-2">
            <Item href={socialLinks.GITHUB}>Github</Item>
            <Item href={socialLinks.LINKEDIN}>Linkedin</Item>
            <Item href={socialLinks.TWITTER}>Twitter</Item>
            <Item href={socialLinks.EMAIL}>Email</Item>
         </div>
      </div>
   )
}

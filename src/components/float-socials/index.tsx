import * as React from 'react'

import { socialLinks } from '~/utils/constants'

const Item = ({ children, href }: any) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="transition-all border-b-2 border-transparent hover:border-primary hover:text-primary-500 no-underline"
  >
    {children}
  </a>
)

export const FloatSocials = () => {
  return (
    <div className="fixed bottom-2 left-4 md:bottom-8 md:left-8 hidden lg:block">
      <div className="flex flex-col space-y-4">
        <Item href={socialLinks.GITHUB}>Github</Item>
        <Item href={socialLinks.LINKEDIN}>Linkedin</Item>
        <Item href={socialLinks.TWITTER}>Twitter</Item>
        <Item href={socialLinks.EMAIL}>Email</Item>
      </div>
    </div>
  )
}

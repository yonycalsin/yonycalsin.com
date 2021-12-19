import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useFlag } from 'toggled'

import JavascriptLogo from '~/assets/images/javascript.webp'
import Features from '~/utils/features-flags'

export const Navbar = () => {
  const hasResume = useFlag(Features.RESUME)

  const hasBlog = useFlag(Features.BLOG)

  return (
    <div className="shadow-sm sticky top-0 backdrop-filter backdrop-grayscale backdrop-blur-md">
      <div className="container flex items-center justify-between flex-col h-auto md:flex-row md:h-7 lg:h-10">
        <div>
          <Link href="/">
            <a className="flex flex-row items-center no-underline" title="">
              <div className="block h-3 w-3 mr-1 md:mr-2 md:h-4 md:w-4">
                <Image src={JavascriptLogo} layout="intrinsic" width={32} height={32} priority alt="" />
              </div>
              <h1 className="text-lg md:text-2xl text-gray m-0">Yony Calsin</h1>
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-3 font-medium">
          <Link href="/projects">
            <a>Proyectos</a>
          </Link>
          <Link href="/me">
            <a>Sobre Mi</a>
          </Link>
          {hasBlog && (
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          )}
          {hasResume && (
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

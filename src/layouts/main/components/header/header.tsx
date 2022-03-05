import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useFlag } from 'toggled'

import JavascriptLogo from '~/assets/images/javascript.webp'
import Features from '~/utils/features-flags'

export const Header = () => {
  const hasResume = useFlag(Features.RESUME)

  const hasBlog = useFlag(Features.BLOG)

  const hasBooks = useFlag(Features.BOOKS)

  const hasProjects = useFlag(Features.PROJECTS)

  return (
    <div className="shadow-sm fixed top-0 backdrop-blur-lg z-10 w-full dark:bg-[#1c1e24]">
      <div className="container flex items-center justify-between flex-col md:flex-row h-13 md:h-7 lg:h-10">
        <div>
          <Link href="/">
            <a className="flex flex-row items-center no-underline" title="">
              <div className="block h-3 w-3 mr-1 md:mr-2 md:h-4 md:w-4">
                <Image src={JavascriptLogo} layout="intrinsic" width={32} height={32} priority alt="" />
              </div>
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-3 font-medium">
          {hasProjects && (
            <Link href="/projects">
              <a>Proyectos</a>
            </Link>
          )}
          <Link href="/me">
            <a>Sobre Mi</a>
          </Link>
          {hasBlog && (
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          )}
          {hasBooks && (
            <Link href="/books">
              <a>Books</a>
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

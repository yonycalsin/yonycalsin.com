import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useFlag } from 'toggled'

import JavascriptLogo from '~/assets/images/javascript.webp'
import { Anchor } from '~/components/anchor/anchor'
import Features from '~/utils/features-flags'

export const Header = () => {
  const hasResume = useFlag(Features.RESUME)

  const hasBlog = useFlag(Features.BLOG)

  const hasBooks = useFlag(Features.BOOKS)

  const hasProjects = useFlag(Features.PROJECTS)

  return (
    <div className="shadow-sm fixed top-0 backdrop-blur-lg z-10 w-full dark:bg-[#1c1e24] ">
      <div className="container flex items-center justify-between flex-col lg:flex-row h-13 md:h-7 lg:h-10 py-2 lg:py-0">
        <div>
          <Link href="/">
            <a className="flex flex-row items-center no-underline" title="">
              <div className="block h-3 w-3 mr-1 md:mr-2 md:h-4 md:w-4">
                <Image src={JavascriptLogo} layout="intrinsic" width={32} height={32} priority alt="" />
              </div>
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-3 font-medium lg:text-lg">
          {hasProjects && (
            <Link href="/projects" passHref>
              <Anchor>Proyectos</Anchor>
            </Link>
          )}
          <Link href="/me" passHref>
            <Anchor>Sobre Mi</Anchor>
          </Link>
          {hasBlog && (
            <Link href="/blog" passHref>
              <Anchor>Blog</Anchor>
            </Link>
          )}
          {hasBooks && (
            <Link href="/books" passHref>
              <Anchor>Books</Anchor>
            </Link>
          )}
          {hasResume && (
            <Link href="/resume" passHref>
              <Anchor>Resume</Anchor>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

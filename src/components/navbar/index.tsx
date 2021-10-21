import * as React from 'react'
import Image from 'next/image'
import JavascriptLogo from '~/assets/images/javascript.webp'
import Link from 'next/link'

import { authorInfo } from '~/utils/constants'

export const Navbar = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="container flex items-center justify-between flex-col h-auto md:flex-row md:h-7 lg:h-10">
        <div>
          <Link href="/">
            <a className="flex flex-row items-center no-underline" title="">
              <div className="block h-3 w-3 mr-1 md:mr-2 md:h-4 md:w-4">
                <Image src={JavascriptLogo} layout="intrinsic" width={32} height={32} placeholder="blur" priority />
              </div>
              <h1 className="text-2xl text-gray">Yony Calsin</h1>
            </a>
          </Link>
        </div>

        <div className="flex items-center space-x-3">
          <Link href="/projects">
            <a>Work</a>
          </Link>
          <Link href="/me">
            <a>Sobre Mi</a>
          </Link>
<!--           <a href={authorInfo.RESUME} target="__blank">
            Resume
          </a> -->
        </div>
      </div>
    </div>
  )
}

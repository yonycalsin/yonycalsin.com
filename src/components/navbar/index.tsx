import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import JavascriptLogo from '~/assets/images/javascript.webp'

export const Navbar = () => {
  return (
    <div className="dark:bg-gray-900">
      <div className="container flex items-center justify-between flex-col h-auto md:flex-row md:h-7 lg:h-10">
        <div>
          <Link href="/">
            <a className="flex flex-row items-center no-underline" title="">
              <div className="block h-3 w-3 mr-1 md:mr-2 md:h-4 md:w-4">
                <Image
                  src={JavascriptLogo}
                  layout="intrinsic"
                  width={32}
                  height={32}
                  placeholder="blur"
                  priority
                  alt=""
                />
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
        </div>
      </div>
    </div>
  )
}

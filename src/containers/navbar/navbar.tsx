'use client'

import isotipo from 'assets/brand/images/isotipo.png'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { cn } from 'utils'
import { ENV } from 'utils/constants'

function Navbar() {
  const pathname = usePathname()

  return (
    <div className="w-full z-10 shadow-sm">
      <div className="container py-5 md:py-6 flex justify-between items-center">
        <Link href="/">
          <Image className="border-2" src={isotipo} alt="Logo" width="40" height="40" />
        </Link>
        <div className="flex items-center space-x-6 text-sm font-medium">
          <Link
            href="/projects"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/projects' ? 'text-foreground' : 'text-foreground/60',
            )}
          >
            Projects
          </Link>
          <Link
            href="/me"
            className={cn(
              'transition-colors hover:text-foreground/80',
              pathname === '/me' ? 'text-foreground' : 'text-foreground/60',
            )}
          >
            About Me
          </Link>
          {ENV.FF_FAQ ? (
            <Link
              href="/faq"
              className={cn(
                'transition-colors hover:text-foreground/80',
                pathname === '/faq' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              FAQ
            </Link>
          ) : null}
          {ENV.FF_USES ? (
            <Link
              href="/uses"
              className={cn(
                'transition-colors hover:text-foreground/80 hidden lg:inline-block',
                pathname === '/uses' ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Uses
            </Link>
          ) : null}
          {ENV.FF_SNIPPETS ? (
            <Link
              href="/blog/categories/snippet"
              className={cn(
                'transition-colors hover:text-foreground/80 hidden lg:inline-block',
                pathname?.startsWith('/blog/categories/snippet') ? 'text-foreground' : 'text-foreground/60',
              )}
            >
              Snippets
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Navbar

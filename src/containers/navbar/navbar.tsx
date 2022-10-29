import isotipo from 'assets/brand/images/isotipo.png'

import Image from 'next/image'
import Link from 'next/link'

import { Anchor } from 'components'
import { ENV } from 'utils/constants'

function Navbar() {
  return (
    <div className="w-full z-10 shadow-sm">
      <div className="container py-5 md:py-6 flex justify-between items-center">
        <Link href="/">
          <Image src={isotipo} alt="Logo" width="32" height="32" />
        </Link>
        <div className="space-x-4">
          <Link href="/projects" legacyBehavior={true} passHref={true}>
            <Anchor>Projects</Anchor>
          </Link>
          <Link href="/me" legacyBehavior={true} passHref={true}>
            <Anchor>About Me</Anchor>
          </Link>
          {ENV.FF_FAQ && (
            <Link href="/faq" legacyBehavior={true} passHref={true}>
              <Anchor>FAQ</Anchor>
            </Link>
          )}
          {ENV.FF_USES && (
            <Link href="/uses" legacyBehavior={true} passHref={true}>
              <Anchor>Uses</Anchor>
            </Link>
          )}
          {ENV.FF_SNIPPETS && (
            <Link href="/blog/categories/snippet" legacyBehavior={true} passHref={true}>
              <Anchor>Snippets</Anchor>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar

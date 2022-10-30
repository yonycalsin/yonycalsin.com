import Link from 'next/link'

import { Anchor } from 'components'

function Footer() {
  return (
    <footer className="my-6">
      <div className="container">
        <footer className="p-4 bg-white rounded-lg shadow flex flex-col md:flex-row md:items-center md:justify-between md:p-6">
          <span className="text-gray-500">
            © 2022{' '}
            <a href="https://yonycalsin.com" className="hover:underline">
              Yony Calsin™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap gap-3 items-center justify-center">
            <li>
              <Link href="/me" legacyBehavior passHref>
                <Anchor>About</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior passHref>
                <Anchor>Contact</Anchor>
              </Link>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  )
}

export default Footer

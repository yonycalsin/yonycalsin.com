/* eslint-disable react/jsx-max-depth */
import * as React from 'react'
import Link from 'next/link'

import { Anchor } from 'components'

function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container">
        <footer className="p-4rounded-lg flex flex-col md:flex-row md:items-center md:justify-between md:p-6">
          <span className="text-gray-500">
            © 2023{' '}
            <a href="https://yonycalsin.com" className="hover:underline">
              Yony Calsin™
            </a>
            . All Rights Reserved.
          </span>
          <ul className="flex flex-wrap gap-3 items-center justify-center">
            <li>
              <Link href="/me" legacyBehavior={true} passHref={true}>
                <Anchor>About</Anchor>
              </Link>
            </li>
            <li>
              <Link href="/contact" legacyBehavior={true} passHref={true}>
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

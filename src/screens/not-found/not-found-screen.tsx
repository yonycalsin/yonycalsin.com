import * as React from 'react'
import Link from 'next/link'

import { MainLayout } from 'layouts'
import { Anchor } from 'components/anchor'
import { Heading } from 'components/heading'

function NotFoundScreen() {
  return (
    <MainLayout>
      <main className="container py-12">
        <div className="space-y-12 flex flex-col items-center">
          <Heading size="h1">😢</Heading>
          <Heading size="h1">Page not found</Heading>
          <div className="flex flex-col lg:flex-row gap-6 text-center">
            <Link href="/" passHref legacyBehavior>
              <Anchor>Go to home</Anchor>
            </Link>
            <span className="hidden lg:block">•</span>
            <Link href="/me" passHref legacyBehavior>
              <Anchor>Go to about-me page</Anchor>
            </Link>
            <span className="hidden lg:block">•</span>
            <Link href="/projects" passHref legacyBehavior>
              <Anchor>Go to projects page</Anchor>
            </Link>
          </div>
        </div>
      </main>
    </MainLayout>
  )
}

export default NotFoundScreen

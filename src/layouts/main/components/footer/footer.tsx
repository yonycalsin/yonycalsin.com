import * as React from 'react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 h-12 md:h-15 lg:h-20 dark:border-gray-700 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="mb-0">
          <small>
            Created By{' '}
            <i>
              <b>Yony Calsin</b>
            </i>{' '}
          </small>
        </p>

        <p className="mb-0">
          <small>Built with Next.js, MDX, Tailwind and Vercel</small>
        </p>
      </div>
    </footer>
  )
}

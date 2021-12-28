import * as React from 'react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container border-t-2 border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row flex-wrap justify-between items-center ">
          <p>
            <small>
              Created By{' '}
              <i>
                <b>Yony Calsin</b>
              </i>{' '}
            </small>
          </p>

          <p>
            <small>Built with Next.js, MDX, Tailwind and Vercel</small>
          </p>
        </div>
      </div>
    </footer>
  )
}

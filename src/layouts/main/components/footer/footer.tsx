import * as React from 'react'

import { Typography } from '~/components/typography/typography'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 h-24 md:h-32 lg:h-40 dark:border-gray-700 flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Typography className="mb-4">
          <small>
            Created By{' '}
            <i>
              <b>Yony Calsin</b>
            </i>{' '}
          </small>
        </Typography>

        <Typography variant="h4" fontWeight="normal" className="italic">
          <small>Built with Next.js, MDX, Tailwind and Vercel</small>
        </Typography>
      </div>
    </footer>
  )
}

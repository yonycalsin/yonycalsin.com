import * as React from 'react'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

function VercelInsights() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}

export default VercelInsights

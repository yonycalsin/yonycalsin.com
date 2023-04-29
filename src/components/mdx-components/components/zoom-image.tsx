'use client'

import 'react-medium-image-zoom/dist/styles.css'

import Zoom from 'react-medium-image-zoom'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ZoomImage(props: any) {
  return (
    <Zoom>
      <img {...props} />
    </Zoom>
  )
}

export default ZoomImage

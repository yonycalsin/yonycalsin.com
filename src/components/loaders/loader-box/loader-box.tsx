import * as React from 'react'

import { Spinner } from 'components/spinner'
import LoaderBoxWrapper from './loader-box-wrapper'

function LoaderBox() {
  return (
    <LoaderBoxWrapper>
      <Spinner />
    </LoaderBoxWrapper>
  )
}

export default LoaderBox

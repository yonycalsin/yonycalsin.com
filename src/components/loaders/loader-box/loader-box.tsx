import { Spinner } from '@chakra-ui/react'

import LoaderBoxWrapper from './loader-box-wrapper'

function LoaderBox() {
  return (
    <LoaderBoxWrapper>
      <Spinner size="lg" role="progressbar" />
    </LoaderBoxWrapper>
  )
}

export default LoaderBox

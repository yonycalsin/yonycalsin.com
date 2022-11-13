import * as React from 'react'

import type { CustomPageHeadProps } from 'typings/app'
import { getPageApi } from 'services'
import { Meta } from 'components'

function Head(props: CustomPageHeadProps) {
  const { params } = props

  const customPageSlug = params.slug.join('/')

  const customPageResponse = React.use(getPageApi(customPageSlug))

  const customPage = customPageResponse.data

  if (!customPage) {
    return null
  }

  return <Meta title={customPage?.title} notRobots={customPage?.visibility !== 'public'} />
}

export default Head

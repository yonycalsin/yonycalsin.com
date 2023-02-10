import * as React from 'react'
import { notFound } from 'next/navigation'

import type { CustomPagePageProps, CustomPageParams } from 'typings/app'
import { getAllPagesApi, getPageApi } from 'services'
import CustomPageScreen from 'screens/custom-page'
import { PageTransition } from 'components'

export const dynamicParams = true

export async function generateStaticParams(): Promise<CustomPageParams[]> {
  const pagesResponse = await getAllPagesApi()

  const pages = pagesResponse.data.results

  return pages.map(post => ({
    slug: [post.slug],
  }))
}

export default function CustomPagePage(props: CustomPagePageProps) {
  const { params } = props

  const customPageSlug = params.slug.join('/')

  const customPageResponse = React.use(getPageApi(customPageSlug))

  const customPage = customPageResponse.data

  if (!customPage) {
    return notFound()
  }

  return (
    <PageTransition>
      <CustomPageScreen customPage={customPage} />
    </PageTransition>
  )
}

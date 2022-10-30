import * as React from 'react'
import { notFound } from 'next/navigation'
import nextBase64 from 'next-base64'

import type { PageResponsePayload } from 'typings/services'
import { getAllPagesApi, getPageApi } from 'services'
import useMDXComponent from 'hooks/use-mdx-component'
import { MDXComponents } from 'components/mdx-components'

interface PageProps {
  params: {
    slug: string[]
  }
}

interface ContentProps {
  page: PageResponsePayload
}

function PageContent(props: ContentProps) {
  const { page } = props

  const BodyComponent = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(page.body.code))))

  return (
    <>
      <BodyComponent components={MDXComponents} />
    </>
  )
}

function Page(props: PageProps) {
  const { params } = props

  const pageSlug = params.slug.join('/')

  if (!pageSlug) {
    return notFound()
  }

  const response = React.use(getPageApi(pageSlug))

  if (!response.data) {
    return notFound()
  }

  return (
    <div>
      <div className="container pb-10 mt-4">
        <PageContent page={response.data} />
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const pages = await getAllPagesApi()

  return pages.data.map(page => ({ slug: page.slug.split('/') }))
}

export const dynamicParams = false

export default Page

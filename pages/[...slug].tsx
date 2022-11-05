import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import * as React from 'react'
import { QueryClient } from '@tanstack/react-query'
import { map } from 'lodash'
import nextBase64 from 'next-base64'

import type { PagePageProps, PagePageQueryParams } from 'typings/pages'
import type { PageResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { getAllPagesApi, getPageApi } from 'services'
import { API_ENDPOINTS } from 'services/shared'
import { useMDXComponent } from 'hooks'
import { MainLayout } from 'layouts'
import { MDXComponents, Meta } from 'components'
import { NUMERICS, TIMINGS } from 'utils/constants'

function PagePage(props: PagePageProps) {
  const { page } = props

  const BodyComponent = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(page.body.code))))

  return (
    <>
      <Meta title={page.title} notRobots={page.visibility !== 'public'} />
      <MainLayout>
        <div className="container pb-10">
          <BodyComponent components={MDXComponents} />
        </div>
      </MainLayout>
    </>
  )
}

export async function getStaticPaths(): Promise<GetStaticPathsResult<PagePageQueryParams>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const pages = await queryClient.fetchQuery<ServerListResponse<PageResponsePayload>>(
    [API_ENDPOINTS.ALL_PAGES],
    () => getAllPagesApi(),
    { staleTime: Infinity },
  )

  return {
    fallback: false,
    paths: map(pages.data, page => {
      return {
        params: {
          slug: [page.slug],
        },
      }
    }),
  }
}

export async function getStaticProps(
  context: GetStaticPropsContext<PagePageQueryParams>,
): Promise<GetStaticPropsResult<PagePageProps>> {
  const { params } = context

  const pageSlug = params?.slug.join('/')

  if (!pageSlug) {
    return {
      notFound: true,
    }
  }

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: NUMERICS.RETRY_QUERY,
      },
    },
  })

  const page = await queryClient.fetchQuery<ServerResponse<PageResponsePayload>>(
    [API_ENDPOINTS.PAGE(pageSlug)],
    () => getPageApi(pageSlug),
    { staleTime: Infinity },
  )

  if (!page.data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      page: page.data,
    },
    revalidate: TIMINGS.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default PagePage

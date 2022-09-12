import * as React from 'react'
import { Container } from '@chakra-ui/react'
import { QueryClient } from '@tanstack/react-query'
import { map } from 'lodash'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import nextBase64 from 'next-base64'

import MDXComponents from '~/components/mdx-components'
import { Meta } from '~/components/meta'
import { NUMERICS } from '~/constants/numerics'
import { useMDXComponent } from '~/hooks/useMDXComponent'
import { MainLayout } from '~/layouts'
import { getAllPages, getPage } from '~/services/page/pages'
import { pageApiEndpoints } from '~/services/page/utils/page-api-endpoints'
import type { PagePageProps, PagePageQueryParams } from '~/typings/pages/pages'
import type { ServerListResponse, ServerResponse } from '~/typings/services'
import type { PageResponsePayload } from '~/typings/services/page/pages'
import { timings } from '~/utils/constants/constants'

function PagePage(props: PagePageProps) {
  const { page } = props

  const BodyComponent = useMDXComponent(decodeURIComponent(decodeURIComponent(nextBase64.decode(page.body.code))))

  return (
    <>
      <Meta title={page.title} notRobots={page.visibility !== 'public'} />
      <MainLayout>
        <Container maxW="container.md" pb="12">
          <BodyComponent components={MDXComponents} />
        </Container>
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
    [pageApiEndpoints.ALL_PAGES],
    () => getAllPages(),
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
    [pageApiEndpoints.PAGE(pageSlug)],
    () => getPage(pageSlug),
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
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default PagePage

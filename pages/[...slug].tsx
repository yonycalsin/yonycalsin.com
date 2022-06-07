import { QueryClient } from 'react-query'
import { Container } from '@chakra-ui/react'
import { map } from 'lodash'
import type { GetStaticPathsResult, GetStaticPropsContext, GetStaticPropsResult } from 'next'
import nextBase64 from 'next-base64'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { createQueryFn } from '~/clients/query-client'
import MDXComponents from '~/components/mdx-components'
import { Meta } from '~/components/meta'
import { QUERY_KEY_PAGES } from '~/constants/query-keys'
import { MainLayout } from '~/layouts'
import type { IPage, IPageQueryWithData, IPageQueryWithMeta } from '~/module-types/api-rest/pages'
import { timings } from '~/utils/constants'

interface PageSLugPageProps {
  page: IPage
}

function PageSLugPage(props: PageSLugPageProps) {
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

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  const pages = await queryClient.fetchQuery<IPageQueryWithMeta>(QUERY_KEY_PAGES, {
    staleTime: Infinity,
  })

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
  context: GetStaticPropsContext<{ slug: string[] }>,
): Promise<GetStaticPropsResult<PageSLugPageProps>> {
  const { params } = context

  const pageSlug = params?.slug.join('/')

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  const page = await queryClient.fetchQuery<IPageQueryWithData>(`/pages/${pageSlug}`, {
    staleTime: Infinity,
  })

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

export default PageSLugPage

import * as React from 'react'
import { dehydrate, DehydratedState, QueryClient } from 'react-query'
import type { GetStaticPropsResult } from 'next'

import { createQueryFn } from '~/clients/query-client'
import { QUERY_KEY_FEATURED_RECOMMENDATIONS, QUERY_KEY_PINNED_PROJECTS } from '~/constants/query-keys'
import { allBlogs, Blog } from '~/lib/contentlayer-data/blog'
import type { IAchievementQueryWithMeta } from '~/module-types/api-rest/achievements'
import type { IProjectQueryWithMeta } from '~/module-types/api-rest/projects'
import type { IRecommendationQueryWithMeta } from '~/module-types/api-rest/recommendations'
import { HomeScreen } from '~/screens/home'
import { queryKeys, timings } from '~/utils/constants'

interface HomePageProps {
  latestBlogs: Blog[]
  dehydratedState: DehydratedState
}

function HomePage(props: HomePageProps) {
  const { latestBlogs } = props

  return <HomeScreen latestBlogs={latestBlogs} />
}

export async function getStaticProps(): Promise<GetStaticPropsResult<HomePageProps>> {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryFn: createQueryFn(),
      },
    },
  })

  const latestBlogs = allBlogs
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
    .slice(0, 5)

  await queryClient.prefetchQuery<IAchievementQueryWithMeta>(queryKeys.FEATURED_ACHIEVEMENTS, {
    staleTime: Infinity,
  })

  await queryClient.prefetchQuery<IRecommendationQueryWithMeta>(QUERY_KEY_FEATURED_RECOMMENDATIONS, {
    staleTime: Infinity,
  })

  await queryClient.prefetchQuery<IProjectQueryWithMeta>(QUERY_KEY_PINNED_PROJECTS, {
    staleTime: Infinity,
  })

  return {
    props: {
      latestBlogs,
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: timings.REVALIDATE_STATIC_PAGES_TIME,
  }
}

export default HomePage

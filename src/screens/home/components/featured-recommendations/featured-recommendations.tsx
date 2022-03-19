import * as React from 'react'
import { useQuery } from 'react-query'
import Link from 'next/link'

import { Recommendations } from '~/components/recommendations'
import { Section } from '~/components/section/section'
import { SectionHeader } from '~/components/section/section-header'
import { QUERY_KEY_FEATURED_RECOMMENDATIONS } from '~/constants/query-keys'
import type { IRecommendationQueryWithMeta } from '~/module-types/api-rest/recommendations'

export interface FeaturedRecommendationsProps {}

export function FeaturedRecommendations() {
  const queryResult = useQuery<IRecommendationQueryWithMeta>(QUERY_KEY_FEATURED_RECOMMENDATIONS, {
    staleTime: Infinity,
  })

  const recommendations = queryResult.data?.data ?? []

  return (
    <Section>
      <SectionHeader
        title="Recomendaciones"
        hasBetaTag
        actionLabel="Ver más"
        actionComponent={Link}
        actionHref="/recommendations"
      />
      <Recommendations className="mt-6 mb-6" recommendations={recommendations} />
    </Section>
  )
}

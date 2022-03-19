import * as React from 'react'

import { Anchor } from '~/components/anchor/anchor'
import { Typography } from '~/components/typography/typography'
import type { IRecommendation } from '~/module-types/api-rest/recommendations'

export interface RecommendationProps {
  recommendation: IRecommendation
}

export function Recommendation(props: RecommendationProps) {
  const { recommendation } = props

  return (
    <blockquote className="border border-l-4 dark:bg-gray-900 p-4 rounded-lg dark:border-transparent border-l-primary-300 dark:border-l-primary mb-0">
      <Typography className="mb-2 dark:text-gray-500">{recommendation.text}</Typography>
      <Typography variant="h6" className="italic mb-2" fontWeight="extrabold">
        -{' '}
        <Anchor href={recommendation.author.linkedin} target="_blank" variant="decorated">
          {recommendation.author.name}
        </Anchor>
      </Typography>
      <Typography variant="h6" fontWeight="light" className="italic text-gray-500">
        {recommendation.author.jobTitle}
      </Typography>
    </blockquote>
  )
}

import * as React from 'react'

import type { RecommendationProps } from 'typings/components'
import { Anchor } from 'components/anchor'

function Recommendation(props: RecommendationProps) {
  const { recommendation } = props

  return (
    <blockquote
      className="space-y-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-card border-l-4 border-primary-500"
      role="listitem"
    >
      <p>{recommendation.text}</p>
      <p className="text-sm italic font-extrabold">
        -{' '}
        <Anchor href={recommendation.author.linkedin} target="_blank" className="text-gray-600">
          {recommendation.author.name}
        </Anchor>
      </p>
      <p className="italic text-xs text-gray-400">{recommendation.author.jobTitle}</p>
    </blockquote>
  )
}

export default Recommendation

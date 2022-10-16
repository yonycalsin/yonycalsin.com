import type { RecommendationResponsePayload } from 'typings/services'

interface RecommendationsProps {
  recommendations: RecommendationResponsePayload[]
}

interface RecommendationProps {
  recommendation: RecommendationResponsePayload
}

export type { RecommendationProps, RecommendationsProps }

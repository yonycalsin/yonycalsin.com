interface RecommendationAuthorResponsePayload {
  name: string
  jobTitle: string
  avatar: string | null
  linkedin: string
}

interface RecommendationResponsePayload {
  id: string
  type: 'received' | 'given'
  text: string
  author: RecommendationAuthorResponsePayload
  createdAt: string
}

export type { RecommendationResponsePayload }

interface RecommendationAuthorResponsePayload {
  name: string
  jobTitle: string
  avatar: string | null
  linkedin: string
}

export interface RecommendationResponsePayload {
  id: string
  type: 'received' | 'given'
  text: string
  author: RecommendationAuthorResponsePayload
  createdAt: string
}

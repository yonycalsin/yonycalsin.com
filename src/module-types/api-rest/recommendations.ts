export interface IRecommendationAuthor {
  name: string
  jobTitle: string
  avatar: string | null
  linkedin: string
}

export interface IRecommendation {
  id: string
  type: 'received' | 'given'
  text: string
  author: IRecommendationAuthor
  createdAt: string
}

export interface IRecommendationQueryWithMeta {
  data: IRecommendation[]
  meta: PaginationMeta
}

export interface IRecommendationQueryWithData {
  data: IRecommendation
}

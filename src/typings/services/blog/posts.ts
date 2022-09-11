export interface PostResponsePayload {
  title: string
  slug: string
  visibility: string
  tags: string[]
  categories: string[]
  body: {
    type: string
    code: string
  }
  createdAt: string
  updatedAt: string
}

export interface PostListQueryParamsRequestPayload {
  category: string[]
}

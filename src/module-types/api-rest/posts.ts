export interface IPost {
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

export interface IPostQueryWithMeta {
  data: IPost[]
  meta: PaginationMeta
}

export interface IPostQueryWithData {
  data: IPost
}

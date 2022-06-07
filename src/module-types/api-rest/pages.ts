export interface IPage {
  title: string
  slug: string
  visibility: string
  body: {
    type: string
    code: string
  }
  createdAt: string
  updatedAt: string
}

export interface IPageQueryWithMeta {
  data: IPage[]
  meta: PaginationMeta
}

export interface IPageQueryWithData {
  data: IPage
}

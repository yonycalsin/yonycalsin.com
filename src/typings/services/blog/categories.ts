export interface CategoryResponsePayload {
  title: string
  slug: string
  body: {
    type: string
    code: string
  }
  createdAt: string
  updatedAt: string
}

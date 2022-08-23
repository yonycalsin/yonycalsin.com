export interface BookResponsePayload {
  id: string
  name: string
  rating: number
  releaseAt: string
  status: string
  author: string
  tags: string[]
  images: {
    name: string
    url: string
  }[]
  createdAt: string
  updatedAt: string
}

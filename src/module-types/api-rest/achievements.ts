export interface IAchievement {
  id: string
  title: string
  shortDescription: string
  type: string
  date: string
  isFeatured: boolean
  isPublished: boolean
}

export interface IAchievementQueryWithMeta {
  data: IAchievement[]
  meta: PaginationMeta
}

export interface IAchievementQueryWithData {
  data: IAchievement
}

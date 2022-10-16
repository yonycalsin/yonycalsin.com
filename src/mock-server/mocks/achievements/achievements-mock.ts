import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'

const achievementsSuccess: ServerListResponse<AchievementResponsePayload> = {
  data: [
    {
      id: 'achievement-1',
      title: 'The best developer in the company',
      shortDescription: 'I have done all projects successfully',
      type: 'Work',
      date: '2022-10-15T23:22:33.718Z',
      isFeatured: true,
      isPublished: true,
    },
  ],
  error: null,
  meta: {
    hasNextPage: false,
    hasPrevPage: false,
    page: 1,
    pages: 1,
    total: 1,
  },
}

export { achievementsSuccess }

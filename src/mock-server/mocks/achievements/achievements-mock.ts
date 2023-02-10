import type { AchievementResponsePayload, ServerListResponse } from 'typings/services'

const achievementsSuccess: ServerListResponse<AchievementResponsePayload> = {
  data: {
    results: [
      {
        id: 'achievement-1',
        title: 'Revelation of the year - 2022',
        shortDescription: 'I was recognized for incredible performance as a software developer in 2022 at CompanyName.',
        type: 'Work',
        date: '2022-09-13T00:34:27.889Z',
        isFeatured: true,
        isPublished: true,
      },
      {
        id: 'achievement-2',
        title: 'Microsoft Hackaton',
        shortDescription: 'I created most creative application',
        type: 'Award',
        date: '2021-07-13T00:44:17.889Z',
        isFeatured: false,
        isPublished: true,
      },
      {
        id: 'achievement-3',
        title: 'Harvard Business School',
        shortDescription: 'I created an amazing payment app',
        type: 'Education',
        date: '2019-07-11T00:54:23.889Z',
        isFeatured: true,
        isPublished: true,
      },
      {
        id: 'achievement-4',
        title: 'Search Engine Bug',
        shortDescription: 'I found a bug in search engine',
        type: 'Security',
        date: '2021-02-16T00:24:24.889Z',
        isFeatured: true,
        isPublished: true,
      },
      {
        id: 'achievement-5',
        title: 'The best developer in the company',
        shortDescription: 'I have done all projects successfully',
        type: 'Work',
        date: '2022-10-15T23:22:33.718Z',
        isFeatured: true,
        isPublished: true,
      },
    ],
    meta: {
      hasNextPage: false,
      hasPrevPage: false,
      page: 1,
      pages: 1,
      total: 1,
    },
  },
  error: null,
}

export { achievementsSuccess }

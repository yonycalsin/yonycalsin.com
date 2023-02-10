import type { BookResponsePayload, ServerListResponse } from 'typings/services'

const allBooksSuccess: ServerListResponse<BookResponsePayload> = {
  error: null,
  data: {
    results: [
      {
        id: 'books-1-1',
        name: 'Clean Code',
        rating: 5,
        releaseAt: '2020-10-15T23:56:48.371Z',
        status: 'Published',
        author: 'Tim Chuckby',
        tags: ['programing', 'architecture'],
        images: [
          {
            name: 'Front',
            url: 'https://static.yonycalsin.com/books/clean-code-front.png',
          },
        ],
        createdAt: '2022-10-15T23:58:33.131Z',
        updatedAt: '2022-10-15T23:58:38.923Z',
      },
    ],
    meta: {
      hasPrevPage: false,
      hasNextPage: false,
      page: 1,
      pages: 1,
      total: 1,
    },
  },
}

const readingBooksSuccess: ServerListResponse<BookResponsePayload> = {
  error: null,
  data: {
    results: [
      {
        id: 'books-2-1',
        name: 'Clean Architecture',
        rating: 4.5,
        releaseAt: '2019-10-15T23:59:28.531Z',
        status: 'Reading',
        author: 'Mark Zuck',
        tags: ['programing', 'coding', 'arquitecture'],
        images: [
          {
            name: 'Front',
            url: 'https://static.yonycalsin.com/books/clean-arquitecture-front.png',
          },
        ],
        createdAt: '2022-10-16T00:01:28.467Z',
        updatedAt: '2022-10-15T00:01:33.155Z',
      },
    ],
    meta: {
      hasPrevPage: false,
      hasNextPage: false,
      page: 1,
      pages: 1,
      total: 1,
    },
  },
}

export { allBooksSuccess, readingBooksSuccess }

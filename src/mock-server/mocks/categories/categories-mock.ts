import nextBase64 from 'next-base64'

import type { CategoryResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { buildMdxRuntimeCode } from 'utils'

const categoriesSuccess: ServerListResponse<CategoryResponsePayload> = {
  data: [
    {
      title: 'Programing',
      slug: 'programing',
      body: {
        type: 'mdx',
        code: nextBase64.encode(
          encodeURIComponent(encodeURIComponent(buildMdxRuntimeCode(`jsx('h1', { children: 'Category: Programing'})`))),
        ),
      },
      createdAt: '2022-10-15T23:49:25.223Z',
      updatedAt: '2022-10-15T23:49:31.414Z',
    },
  ],
  error: null,
  meta: {
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
    pages: 1,
    total: 1,
  },
}

const categorySuccess: ServerResponse<CategoryResponsePayload> = {
  data: {
    title: 'Cracking the Coding Interview',
    slug: 'cracking-the-coding-interview',
    body: {
      type: 'mdx',
      code: nextBase64.encode(
        encodeURIComponent(
          encodeURIComponent(
            buildMdxRuntimeCode(`jsx('div', {
                'data-testid': 'mdx-content',
                children: [
                    jsx(c.p, {
                        children: 'Cracking the Coding Interview: 189 Programming Questions and Solutions is a book by Gayle Laakmann McDowell about coding interviews.',
                        key: 'p-1'
                    })
                ],
            })`),
          ),
        ),
      ),
    },
    createdAt: '2022-10-15T23:50:28.427Z',
    updatedAt: '2022-10-15T23:50:37.179Z',
  },
  error: null,
}

export { categoriesSuccess, categorySuccess }

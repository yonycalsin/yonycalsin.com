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
    title: 'Code Interview',
    slug: 'code-interview',
    body: {
      type: 'mdx',
      code: nextBase64.encode(
        encodeURIComponent(
          encodeURIComponent(buildMdxRuntimeCode(`jsx('h1', { children: 'Category: Code Interview'})`)),
        ),
      ),
    },
    createdAt: '2022-10-15T23:50:28.427Z',
    updatedAt: '2022-10-15T23:50:37.179Z',
  },
  error: null,
}

export { categoriesSuccess, categorySuccess }

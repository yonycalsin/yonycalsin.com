import nextBase64 from 'next-base64'

import type { PostResponsePayload, ServerListResponse } from 'typings/services'
import { buildMdxRuntimeCode } from 'utils'

const postsSuccess: ServerListResponse<PostResponsePayload> = {
  error: null,
  data: [
    {
      title: 'How to mock a rest api',
      slug: 'how-to-mock-a-rest-api',
      visibility: 'public',
      body: {
        type: 'mdx',
        code: nextBase64.encode(
          encodeURIComponent(
            encodeURIComponent(
              buildMdxRuntimeCode(`jsx('div', {
                children: [
                    jsx(c.p, {
                        children: 'Hello from mdx content',
                        key: 'p-1'
                    })
                ]
              })`),
            ),
          ),
        ),
      },
      tags: ['mocking', 'testing'],
      categories: ['testing'],
      createdAt: '2022-08-14T15:09:39.623Z',
      updatedAt: '2022-08-14T15:09:39.623Z',
    },
  ],
  meta: {
    page: 1,
    pages: 1,
    hasNextPage: false,
    hasPrevPage: false,
    total: 1,
  },
}

export { postsSuccess }

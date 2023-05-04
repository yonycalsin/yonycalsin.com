import { encode } from 'next-base64'

import type { PageResponsePayload, ServerListResponse, ServerResponse } from 'typings/services'
import { buildMdxRuntimeCode } from 'utils'

const allPagesSuccess: ServerListResponse<PageResponsePayload> = {
  error: null,
  data: {
    results: [
      {
        title: 'About Me',
        slug: 'me',
        visibility: 'public',
        body: {
          type: 'mdx',
          code: encode(
            encodeURIComponent(
              encodeURIComponent(
                buildMdxRuntimeCode(`jsx('div', {
                    children: [
                        jsx(c.h1, {
                            children: 'About Me',
                            key: 'p-1'
                        }),
                        jsx(c.p, {
                            children: 'I am a software engineer with professional experience on frontend and backend side, and I have been working as a Fullstack lately',
                            key: 'p-2'
                        })
                    ]
                  })`),
              ),
            ),
          ),
        },
        createdAt: '2022-10-16T00:08:52.899Z',
        updatedAt: '2022-10-16T00:08:58.323Z',
      },
      {
        title: 'Frequent Questions',
        slug: 'me',
        visibility: 'public',
        body: {
          type: 'mdx',
          code: encode(
            encodeURIComponent(
              encodeURIComponent(buildMdxRuntimeCode(`jsx('h1', { children: 'Page: Frequent Questions'})`)),
            ),
          ),
        },
        createdAt: '2022-10-16T01:44:08.636Z',
        updatedAt: '2022-10-16T01:44:15.172Z',
      },
      {
        title: 'Uses',
        slug: 'uses',
        visibility: 'public',
        body: {
          type: 'mdx',
          code: encode(
            encodeURIComponent(encodeURIComponent(buildMdxRuntimeCode(`jsx('h1', { children: 'Page: Uses'})`))),
          ),
        },
        createdAt: '2022-10-16T01:45:13.075Z',
        updatedAt: '2022-10-16T01:45:17.596Z',
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

const pageSuccess: ServerResponse<PageResponsePayload> = {
  error: null,
  data: {
    title: 'Mock Page',
    slug: 'mock-page',
    visibility: 'public',
    body: {
      type: 'mdx',
      code: encode(
        encodeURIComponent(encodeURIComponent(buildMdxRuntimeCode(`jsx('h1', { children: 'Page: Mock Page'})`))),
      ),
    },
    createdAt: '2022-10-16T00:10:03.419Z',
    updatedAt: '2022-10-16T00:10:10.443Z',
  },
}

export { allPagesSuccess, pageSuccess }

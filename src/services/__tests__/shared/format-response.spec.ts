import 'isomorphic-fetch'

import { formatResponse } from 'services/shared'

describe('formatResponse', () => {
  it('formats when throws internal server error (500)', async () => {
    const response = new Response('Internal Server Error', { status: 500 })

    const result = await formatResponse(response)

    expect(result).toStrictEqual({
      data: null,
      error: {
        code: 'U00',
        message: '500 | Internal Server Error',
      },
    })
  })

  it('formats when throws page not found (404)', async () => {
    const response = new Response('Page Not Found', { status: 404 })

    const result = await formatResponse(response)

    expect(result).toStrictEqual({
      data: null,
      error: {
        code: 'U00',
        message: '404 | Page Not Found',
      },
    })
  })

  it('formats when a request was successfully processed (200)', async () => {
    const response = new Response(
      JSON.stringify({
        data: [1, 2],
        error: null,
      }),
      { status: 200 },
    )

    const result = await formatResponse(response)

    expect(result).toStrictEqual({
      data: [1, 2],
      error: null,
    })
  })
})

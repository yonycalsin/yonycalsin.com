import type { ServerErrorResponse, ServerListResponse, ServerResponse } from 'typings/services'

type ResponseType = ServerResponse<unknown> | ServerListResponse<unknown>

async function formatResponse<T extends ResponseType>(response: Response): Promise<T> {
  const { status: httpCode } = response

  try {
    if (response.ok) {
      const json = (await response.json()) as T

      return json
    }

    const text = await response.text()

    const value = {
      data: null,
      error: {
        code: 'U00',
        message: `${httpCode} | ${text}`,
      },
    } as T

    return value
  } catch {
    const text = await response.text()

    const error: ServerErrorResponse = {
      code: 'U0',
      message: `${httpCode} | ${text}`,
    }

    const value = {
      data: null,
      error,
    } as T

    return value
  }
}

export default formatResponse

import type HttpResponse from '../Shared/Http/Definitions/HttpResponse'

import type Responder from './Responder'

interface JsonResponderPayload {
  data: unknown
}

class JsonResponder implements Responder<JsonResponderPayload> {
  public answer(
    response: HttpResponse<JsonResponderPayload>,
    payload: JsonResponderPayload,
  ): HttpResponse<JsonResponderPayload> {
    return response.json({
      data: payload.data,
    }) as any
  }
}

export type { JsonResponderPayload }

export default JsonResponder

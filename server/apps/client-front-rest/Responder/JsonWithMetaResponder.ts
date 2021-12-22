import type HttpResponse from '../Shared/Http/Definitions/HttpResponse'

import type Responder from './Responder'

interface JsonWithMetaResponderPayload {
  data: unknown
  meta: unknown
}

class JsonWithMetaResponder implements Responder<JsonWithMetaResponderPayload> {
  public answer(
    response: HttpResponse<JsonWithMetaResponderPayload>,
    payload: JsonWithMetaResponderPayload,
  ): HttpResponse<JsonWithMetaResponderPayload> {
    return response.json({
      data: payload.data,
      meta: payload.meta,
    }) as any
  }
}

export default JsonWithMetaResponder

export type { JsonWithMetaResponderPayload as JsonWithMetadataResponderPayload }

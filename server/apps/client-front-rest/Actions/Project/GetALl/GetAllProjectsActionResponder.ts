import type ListProjectsPaginationDto from '~/server/contexts/client-front/Modules/Project/Application/List/ListProjectsPaginationDto'

import JsonWithMetaResponder from '../../../Responder/JsonWithMetaResponder'
import type Responder from '../../../Responder/Responder'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'

class GetAllProjectsActionResponder implements Responder<ListProjectsPaginationDto> {
  public answer(response: HttpResponse, payload: ListProjectsPaginationDto): HttpResponse {
    const jsonResponder = new JsonWithMetaResponder()

    return jsonResponder.answer(response, {
      data: payload.toJSON().data,
      meta: payload.toJSON().meta,
    })
  }
}

export default GetAllProjectsActionResponder

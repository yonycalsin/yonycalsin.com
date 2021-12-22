import type ListBooksPaginationDto from '~/server/contexts/client-front/Modules/Book/Application/List/ListBooksPaginationDto'

import JsonWithMetaResponder from '../../../Responder/JsonWithMetaResponder'
import type Responder from '../../../Responder/Responder'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'

class GetAllBooksActionResponder implements Responder<ListBooksPaginationDto> {
  public answer(response: HttpResponse<any>, payload: ListBooksPaginationDto): HttpResponse<any> {
    const jsonResponder = new JsonWithMetaResponder()

    return jsonResponder.answer(response, {
      data: payload.toJSON().data,
      meta: payload.toJSON().meta,
    })
  }
}

export default GetAllBooksActionResponder

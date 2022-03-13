import type ListRecommendationsPaginationDto from '~/server/contexts/client-front/Modules/Recommendation/Application/ListRecommendationsPaginationDto'

import JsonWithMetaResponder from '../../../Responder/JsonWithMetaResponder'
import type Responder from '../../../Responder/Responder'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'

class GetAllRecommendationsActionResponder implements Responder<ListRecommendationsPaginationDto> {
  public answer(response: HttpResponse, payload: ListRecommendationsPaginationDto): HttpResponse {
    const jsonResponder = new JsonWithMetaResponder()

    return jsonResponder.answer(response, {
      data: payload.toJSON().data,
      meta: payload.toJSON().meta,
    })
  }
}

export default GetAllRecommendationsActionResponder

import type ListAchievementsPaginationDto from '~/server/contexts/client-front/Modules/Achievement/Application/List/LIstAchievementsPaginationDto'

import JsonWithMetaResponder from '../../../Responder/JsonWithMetaResponder'
import type Responder from '../../../Responder/Responder'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'

class GetAllAchievementsActionResponder implements Responder<ListAchievementsPaginationDto> {
  public answer(response: HttpResponse, payload: ListAchievementsPaginationDto): HttpResponse {
    const jsonResponder = new JsonWithMetaResponder()

    return jsonResponder.answer(response, {
      data: payload.toJSON().data,
      meta: payload.toJSON().meta,
    })
  }
}

export default GetAllAchievementsActionResponder

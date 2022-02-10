import _ from 'lodash'

import type GetResumeDto from '~/server/contexts/client-front/Modules/Resume/Application/Get/GetResumeDto'

import JsonResponder from '../../../Responder/JsonResponder'
import NotFoundResponder from '../../../Responder/NotFoundResponder'
import type Responder from '../../../Responder/Responder'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'

class GetOneResumeActionResponder implements Responder<GetResumeDto> {
  public answer(response: HttpResponse, payload?: GetResumeDto): HttpResponse {
    if (_.isNil(payload)) {
      const responder = new NotFoundResponder()

      return responder.answer(response)
    }

    const jsonResponder = new JsonResponder()

    return jsonResponder.answer(response, {
      data: payload.toJSON(),
    })
  }
}

export default GetOneResumeActionResponder

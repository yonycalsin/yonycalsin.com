import GetResumeQuery from '~/server/contexts/client-front/Modules/Resume/Application/Get/GetResumeQuery'
import type GetResumeQueryHandler from '~/server/contexts/client-front/Modules/Resume/Application/Get/GetResumeQueryHandler'

import type HttpRequest from '../../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'
import type Action from '../../Action'

import type GetOneResumeActionResponder from './GetOneResumeActionResponder'
import GetOneResumeActionValidator from './GetOneResumeActionValidator'

class GetOneResumeAction implements Action {
  private readonly getResumeQueryHandler: GetResumeQueryHandler

  private readonly getOneResumeActionResponder: GetOneResumeActionResponder

  public constructor(
    getResumeQueryHandler: GetResumeQueryHandler,
    getOneResumeActionResponder: GetOneResumeActionResponder,
  ) {
    this.getResumeQueryHandler = getResumeQueryHandler

    this.getOneResumeActionResponder = getOneResumeActionResponder
  }

  public async execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
    const values = GetOneResumeActionValidator.validate({
      id: request.query.id,
    })

    const query = new GetResumeQuery({
      id: values.id,
    })

    const result = await this.getResumeQueryHandler.handle(query)

    return this.getOneResumeActionResponder.answer(response, result)
  }
}

export default GetOneResumeAction

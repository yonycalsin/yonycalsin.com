import ListRecommendationsQuery from '~/server/contexts/client-front/Modules/Recommendation/Application/ListRecommendationsQuery'
import type ListRecommendationsQueryHandler from '~/server/contexts/client-front/Modules/Recommendation/Application/ListRecommendationsQueryHandler'

import type HttpRequest from '../../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'
import type Action from '../../Action'

import type GetAllRecommendationsActionResponder from './GetAllRecommendationsActionResponder'
import GetAllRecommendationsActionValidator from './GetAllRecommendationsActionValidator'

class GetAllRecommendationsAction implements Action {
  private readonly listRecommendationsQueryHandler: ListRecommendationsQueryHandler

  private readonly getAllRecommendationsActionResponder: GetAllRecommendationsActionResponder

  public constructor(
    listRecommendationsQueryHandler: ListRecommendationsQueryHandler,
    getAllRecommendationsActionResponder: GetAllRecommendationsActionResponder,
  ) {
    this.listRecommendationsQueryHandler = listRecommendationsQueryHandler

    this.getAllRecommendationsActionResponder = getAllRecommendationsActionResponder
  }

  public async execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
    const values = GetAllRecommendationsActionValidator.validate(request.query)

    const query = new ListRecommendationsQuery({
      page: values.page,
      limit: values.limit,
    })

    const result = await this.listRecommendationsQueryHandler.handle(query)

    return this.getAllRecommendationsActionResponder.answer(response, result)
  }
}

export default GetAllRecommendationsAction

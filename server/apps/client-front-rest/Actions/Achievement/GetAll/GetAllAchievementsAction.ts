import debug from 'debug'

import ListAchievementsQuery from '~/server/contexts/client-front/Modules/Achievement/Application/List/ListAchievementsQuery'
import type ListAchievementsQueryHandler from '~/server/contexts/client-front/Modules/Achievement/Application/List/ListAchievementsQueryHandler'

import type HttpRequest from '../../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'
import type Action from '../../Action'

import type GetAllAchievementsActionResponder from './GetAllAchievementsActionResponder'
import GetAllAchievementsActionValidator from './GetAllAchievementsActionValidator'

const logger = debug('api:apps:client-front-rest:actions:achievement:get-all:get-all-achievements-action')

class GetAllAchievementsAction implements Action {
  private readonly listAchievementsQueryHandler: ListAchievementsQueryHandler

  private readonly getAllAchievementsActionResponder: GetAllAchievementsActionResponder

  public constructor(
    listAchievementsQueryHandler: ListAchievementsQueryHandler,
    getAllAchievementsActionResponder: GetAllAchievementsActionResponder,
  ) {
    this.listAchievementsQueryHandler = listAchievementsQueryHandler

    this.getAllAchievementsActionResponder = getAllAchievementsActionResponder
  }

  public async execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
    const values = GetAllAchievementsActionValidator.validate(request.query)

    const query = new ListAchievementsQuery({
      page: values.page,
      limit: values.limit,
      isFeatured: values.isFeatured,
    })

    const result = await this.listAchievementsQueryHandler.handle(query)

    return this.getAllAchievementsActionResponder.answer(response, result)
  }
}

export default GetAllAchievementsAction

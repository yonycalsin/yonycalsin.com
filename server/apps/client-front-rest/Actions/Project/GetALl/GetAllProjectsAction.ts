import ListProjectsQuery from '~/server/contexts/client-front/Modules/Project/Application/List/ListProjectsQuery'
import type ListProjectsQueryHandler from '~/server/contexts/client-front/Modules/Project/Application/List/ListProjectsQueryHandler'

import type HttpRequest from '../../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'
import type Action from '../../Action'

import type GetAllProjectsActionResponder from './GetAllProjectsActionResponder'
import GetAllProjectsActionValidator from './GetAllProjectsActionValidator'

class GetAllProjectsAction implements Action {
  private readonly listProjectsQueryHandler: ListProjectsQueryHandler

  private readonly getAllProjectsActionResponder: GetAllProjectsActionResponder

  public constructor(
    listProjectsQueryHandler: ListProjectsQueryHandler,
    getAllProjectsActionResponder: GetAllProjectsActionResponder,
  ) {
    this.listProjectsQueryHandler = listProjectsQueryHandler

    this.getAllProjectsActionResponder = getAllProjectsActionResponder
  }

  public async execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
    const values = GetAllProjectsActionValidator.validate(request.query)

    const query = new ListProjectsQuery({
      page: values.page,
      limit: values.limit,
    })

    const result = await this.listProjectsQueryHandler.handle(query)

    return this.getAllProjectsActionResponder.answer(response, result)
  }
}

export default GetAllProjectsAction

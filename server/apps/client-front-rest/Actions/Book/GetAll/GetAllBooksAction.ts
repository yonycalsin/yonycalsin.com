import ListBooksQuery from '~/server/contexts/client-front/Modules/Book/Application/List/ListBooksQuery'
import type ListBooksQueryHandler from '~/server/contexts/client-front/Modules/Book/Application/List/ListBooksQueryHandler'

import type HttpRequest from '../../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../../Shared/Http/Definitions/HttpResponse'
import type Action from '../../Action'

import type GetAllBooksActionResponder from './GetAllBooksActionResponder'
import GetAllBooksActionValidator from './GetAllBooksActionValidator'

class GetAllBooksAction implements Action {
  private readonly listBooksQueryHandler: ListBooksQueryHandler

  private readonly getAllBooksActionResponder: GetAllBooksActionResponder

  public constructor(
    listBooksQueryHandler: ListBooksQueryHandler,
    getAllBooksActionResponder: GetAllBooksActionResponder,
  ) {
    this.listBooksQueryHandler = listBooksQueryHandler

    this.getAllBooksActionResponder = getAllBooksActionResponder
  }

  public async execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
    const values = GetAllBooksActionValidator.validate(request.query)

    const query = new ListBooksQuery({
      page: values.page,
      limit: values.limit,
      status: values.status,
    })

    const result = await this.listBooksQueryHandler.handle(query)

    return this.getAllBooksActionResponder.answer(response, result)
  }
}

export default GetAllBooksAction

import ListBooksQuery from '~/server/contexts/client-front/Modules/Book/Application/List/ListBooksQuery'
import ListBooksQueryHandler from '~/server/contexts/client-front/Modules/Book/Application/List/ListBooksQueryHandler'
import ListBooksQueryServiceNotion from '~/server/contexts/client-front/Modules/Book/Infrastructure/Query/ListBooksQueryServiceNotion'

import GetAllBooksAction from '../Actions/Book/GetAll/GetAllBooksAction'
import GetAllBooksActionResponder from '../Actions/Book/GetAll/GetAllBooksActionResponder'

class BookActionFactory {
  public static GetAll() {
    const service = new ListBooksQueryServiceNotion()

    const handler = new ListBooksQueryHandler(service)

    const responder = new GetAllBooksActionResponder()

    const action = new GetAllBooksAction(handler, responder)

    return action.execute.bind(action)
  }
}

export default BookActionFactory

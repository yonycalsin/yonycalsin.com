import ListBooksQueryHandler from '~/server/contexts/client-front/Modules/Book/Application/List/ListBooksQueryHandler'
import ListBooksQueryServiceNotion from '~/server/contexts/client-front/Modules/Book/Infrastructure/Query/ListBooksQueryServiceNotion'
import SdkClientNotion from '~/server/contexts/shared/Modules/Shared/Infrastructure/Sdk/SdkClientNotion'

import GetAllBooksAction from '../Actions/Book/GetAll/GetAllBooksAction'
import GetAllBooksActionResponder from '../Actions/Book/GetAll/GetAllBooksActionResponder'

class BookActionFactory {
  public static GetAll() {
    const notionSdkClient = new SdkClientNotion()

    const service = new ListBooksQueryServiceNotion(notionSdkClient)

    const handler = new ListBooksQueryHandler(service)

    const responder = new GetAllBooksActionResponder()

    const action = new GetAllBooksAction(handler, responder)

    return action.execute.bind(action)
  }
}

export default BookActionFactory

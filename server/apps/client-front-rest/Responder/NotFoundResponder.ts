import type HttpResponse from '../Shared/Http/Definitions/HttpResponse'
import HttpStatus from '../Shared/Http/Status/HttpStatus'

import type Responder from './Responder'

class NotFoundResponder implements Responder<never> {
  public answer(response: HttpResponse): any {
    return response.status(HttpStatus.NOT_FOUND).end()
  }
}

export default NotFoundResponder

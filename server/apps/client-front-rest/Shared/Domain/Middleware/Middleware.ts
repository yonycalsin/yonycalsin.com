import type HttpRequest from '../../Http/Definitions/HttpRequest'
import type HttpResponse from '../../Http/Definitions/HttpResponse'

interface Middleware {
  execute(request: HttpRequest, response: HttpResponse): Promise<unknown>
}

export default Middleware

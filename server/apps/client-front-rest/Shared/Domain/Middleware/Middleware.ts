import type { HttpNextHandler } from '../../Http/Definitions/HttpNextHandler'
import type HttpRequest from '../../Http/Definitions/HttpRequest'
import type HttpResponse from '../../Http/Definitions/HttpResponse'

interface Middleware {
  execute(request: HttpRequest, response: HttpResponse, next: HttpNextHandler): Promise<unknown> | unknown
}

export default Middleware

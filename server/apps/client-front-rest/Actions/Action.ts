import type HttpRequest from '../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../Shared/Http/Definitions/HttpResponse'

abstract class Action {
  public abstract execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse>
}

export default Action

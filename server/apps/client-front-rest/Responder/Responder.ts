import type HttpResponse from '../Shared/Http/Definitions/HttpResponse'

interface Responder<T, R extends HttpResponse = HttpResponse> {
  answer(response: R, payload?: T): R
}

export default Responder

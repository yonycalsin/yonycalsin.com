import JsonResponder from '~/server/apps/client-front-rest/Responder/JsonResponder'
import type Responder from '~/server/apps/client-front-rest/Responder/Responder'
import type HttpResponse from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpResponse'
import type SignInDto from '~/server/contexts/client-front/Modules/Auth/Guest/Application/SignIn/SignInDto'

class SignInActionResponder implements Responder<SignInDto> {
  public answer(response: HttpResponse, payload: SignInDto): HttpResponse {
    const jsonResponder = new JsonResponder()

    return jsonResponder.answer(response, {
      data: payload.toJSON(),
    })
  }
}

export default SignInActionResponder

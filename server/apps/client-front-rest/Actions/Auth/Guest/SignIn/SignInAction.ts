import type HttpRequest from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpResponse'
import SignInCommand from '~/server/contexts/client-front/Modules/Auth/Guest/Application/SignIn/SignInCommand'
import type SignInCommandHandler from '~/server/contexts/client-front/Modules/Auth/Guest/Application/SignIn/SignInCommandHandler'

import Action from '../../../Action'

import type SignInActionResponder from './SignInActionResponder'
import SignInActionValidator from './SignInActionValidator'

class SignInAction extends Action {
  private readonly handler: SignInCommandHandler

  private readonly responder: SignInActionResponder

  public constructor(handler: SignInCommandHandler, responder: SignInActionResponder) {
    super()

    this.handler = handler

    this.responder = responder
  }

  public async execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
    const values = SignInActionValidator.validate(request.body)

    const command = new SignInCommand({
      email: values.email,
    })

    const result = await this.handler.handle(command)

    return this.responder.answer(response, result)
  }
}

export default SignInAction

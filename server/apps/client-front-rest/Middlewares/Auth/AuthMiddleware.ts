import type Middleware from '../../Shared/Domain/Middleware/Middleware'
import type HttpRequest from '../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../Shared/Http/Definitions/HttpResponse'
import UnauthorizedException from '../../Shared/Http/Exceptions/UnauthorizedException'

class AuthMiddleware implements Middleware {
  public async execute(request: HttpRequest, response: HttpResponse) {
    const { headers } = request

    const { authorization } = headers as { authorization: string }

    if (!authorization) {
      throw new UnauthorizedException('The authorization header is required')
    }

    const [method, token] = authorization.split(' ')

    if (method != 'Bearer') {
      throw new UnauthorizedException('The authorization method is invalid')
    }

    request.context = {
      fromIp: (headers['cf-connecting-ip'] as string) || (request as any).ip,
    }
  }
}

export default AuthMiddleware

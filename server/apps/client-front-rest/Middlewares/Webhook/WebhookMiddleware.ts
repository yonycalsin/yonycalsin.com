import env from '~/server/contexts/client-front/Modules/Shared/Utils/env'

import type Middleware from '../../Shared/Domain/Middleware/Middleware'
import type { HttpNextHandler } from '../../Shared/Http/Definitions/HttpNextHandler'
import type HttpRequest from '../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../Shared/Http/Definitions/HttpResponse'
import BadRequestException from '../../Shared/Http/Exceptions/BadRequestException'
import UnauthorizedException from '../../Shared/Http/Exceptions/UnauthorizedException'

class WebhookMiddleware implements Middleware {
  public execute(request: HttpRequest, response: HttpResponse, next: HttpNextHandler): void {
    const secret = request.headers.public_key ?? request.query.public_key

    if (!secret) {
      throw new UnauthorizedException('Public key is required')
    }

    const isValidPublicKey = env.REVALIDATE_WEBHOOKS_PUBLIC_KEY === secret

    if (!isValidPublicKey) {
      throw new BadRequestException('Invalid public key')
    }

    next()
  }
}

export default WebhookMiddleware

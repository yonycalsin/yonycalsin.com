import debug from 'debug'
import type { NextHandler } from 'next-connect'

import type HttpRequest from '../../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../../Shared/Http/Definitions/HttpResponse'
import HttpException from '../../Shared/Http/Exceptions/HttpException'
import type InternalServerErrorException from '../../Shared/Http/Exceptions/InternalServerErrorException'
import HttpStatus from '../../Shared/Http/Status/HttpStatus'
import HttpStatusMessages from '../../Shared/Http/Status/HttpStatusMessages'

const logger = debug('api:apps:client-front-rest:middlewares:error:handler')

class ErrorHandlerMiddleware {
  public execute(
    errorException: HttpException | Error,
    request: HttpRequest,
    response: HttpResponse,
    next: NextHandler,
  ) {
    if (!(errorException instanceof Error)) {
      return next()
    }

    const defaultResponseData = {
      statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
      data: null,
      errors: [] as any[],
    }

    // prettier-ignore
    logger('error message: ',(errorException as InternalServerErrorException).innerError?.message ?? errorException.message)
    logger('error stack: ', (errorException as InternalServerErrorException).innerError?.stack ?? errorException.stack)

    if (errorException instanceof HttpException) {
      const error = {
        errorCode: errorException.getErrorCode(),
        message: errorException.getMessage(),
        ...errorException.getExtraData(),
      }

      defaultResponseData.statusCode = errorException.getStatusCode()

      defaultResponseData.errors = [error]

      return response.status(defaultResponseData.statusCode).json(defaultResponseData)
    }

    const error = {
      message: HttpStatusMessages[HttpStatus.INTERNAL_SERVER_ERROR],
    }

    defaultResponseData.errors = [error]

    return response.status(defaultResponseData.statusCode).json(defaultResponseData)
  }
}

export default ErrorHandlerMiddleware

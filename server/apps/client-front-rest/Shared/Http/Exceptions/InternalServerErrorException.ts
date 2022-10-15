import HttpStatus from '../Status/HttpStatus'
import HttpException, { HttpExceptionConstructorOptions } from './HttpException'

class InternalServerErrorException extends HttpException {
  public innerError: Error

  public constructor(messageOrOptions: HttpExceptionConstructorOptions | Error) {
    super(HttpException.createConstructorOptions(HttpStatus.INTERNAL_SERVER_ERROR, messageOrOptions))

    if (messageOrOptions instanceof Error) {
      this.innerError = messageOrOptions
    }
  }
}

export default InternalServerErrorException

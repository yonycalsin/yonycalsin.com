import HttpStatus from '../Status/HttpStatus'
import HttpException, { HttpExceptionConstructorOptions } from './HttpException'

class UnauthorizedException extends HttpException {
  public constructor(messageOrOptions: HttpExceptionConstructorOptions) {
    super(HttpException.createConstructorOptions(HttpStatus.UNAUTHORIZED, messageOrOptions))
  }
}

export default UnauthorizedException

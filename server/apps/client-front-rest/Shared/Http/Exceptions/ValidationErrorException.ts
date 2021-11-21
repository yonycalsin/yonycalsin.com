import HttpStatus from '../Status/HttpStatus'

import HttpException, { HttpExceptionConstructorOptions } from './HttpException'

class ValidationErrorException extends HttpException {
  public constructor(messageOrOptions: HttpExceptionConstructorOptions) {
    super(HttpException.createConstructorOptions(HttpStatus.BAD_REQUEST, messageOrOptions))
  }
}

export default ValidationErrorException

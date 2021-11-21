import HttpStatus from './HttpStatus'

const HttpStatusMessages = {
  [HttpStatus.BAD_REQUEST]: 'Bad Request',
  [HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
  [HttpStatus.NOT_FOUND]: 'Not Found',
  [HttpStatus.UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
}

export default HttpStatusMessages

import ErrorHandlerMiddleware from '../Middlewares/Error/ErrorHandlerMiddleware'

class ErrorMiddlewareFactory {
  public static Reporter() {
    const middleware = new ErrorHandlerMiddleware()

    return middleware.execute.bind(middleware)
  }
}

export default ErrorMiddlewareFactory

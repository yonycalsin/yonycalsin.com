import ErrorHandlerMiddleware from '../Middlewares/Error/ErrorHandlerMiddleware'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class ErrorMiddlewareFactory {
  public static Reporter() {
    const middleware = new ErrorHandlerMiddleware()

    return middleware.execute.bind(middleware)
  }
}

export default ErrorMiddlewareFactory

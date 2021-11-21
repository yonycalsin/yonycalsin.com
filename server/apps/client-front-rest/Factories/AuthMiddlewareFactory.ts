import AuthMiddleware from '../Middlewares/Auth/AuthMiddleware'

class AuthMiddlewareFactory {
  public static Auth() {
    const middleware = new AuthMiddleware()

    return middleware.execute.bind(middleware)
  }
}

export default AuthMiddlewareFactory

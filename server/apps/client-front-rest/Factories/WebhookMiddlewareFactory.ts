import WebhookMiddleware from '../Middlewares/Webhook/WebhookMiddleware'

class WebhookMiddlewareFactory {
  public static PublicKey() {
    const middleware = new WebhookMiddleware()

    return middleware.execute.bind(middleware)
  }
}

export default WebhookMiddlewareFactory

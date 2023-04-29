import WebhookMiddleware from '../Middlewares/Webhook/WebhookMiddleware'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
class WebhookMiddlewareFactory {
  public static PublicKey() {
    const middleware = new WebhookMiddleware()

    return middleware.execute.bind(middleware)
  }
}

export default WebhookMiddlewareFactory

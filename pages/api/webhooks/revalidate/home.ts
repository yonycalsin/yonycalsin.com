import nextConnect from 'next-connect'
import NextCors from 'nextjs-cors'

import ErrorMiddlewareFactory from '~/server/apps/client-front-rest/Factories/ErrorMiddlewareFactory'
import WebhookMiddlewareFactory from '~/server/apps/client-front-rest/Factories/WebhookMiddlewareFactory'
import type HttpRequest from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpResponse'

async function handler(req: HttpRequest, res: HttpResponse) {
  try {
    await res.unstable_revalidate('/')

    return res.json({ revalidated: true })
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send('Error revalidating')
  }
}

export default nextConnect<HttpRequest, HttpResponse>({
  onError: ErrorMiddlewareFactory.Reporter(),
})
  .use(NextCors)
  .use(WebhookMiddlewareFactory.PublicKey())
  .get(handler)

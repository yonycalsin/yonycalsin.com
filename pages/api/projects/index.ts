import nextConnect from 'next-connect'
import NextCors from 'nextjs-cors'

import ErrorMiddlewareFactory from '~/server/apps/client-front-rest/Factories/ErrorMiddlewareFactory'
import ProjectActionFactory from '~/server/apps/client-front-rest/Factories/ProjectActionFactory'
import type HttpRequest from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpResponse'

export default nextConnect<HttpRequest, HttpResponse>({
  onError: ErrorMiddlewareFactory.Reporter(),
})
  .use(NextCors)
  .get(ProjectActionFactory.GetAll())

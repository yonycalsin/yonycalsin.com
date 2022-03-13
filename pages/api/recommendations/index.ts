import nextConnect from 'next-connect'
import NextCors from 'nextjs-cors'

import ErrorMiddlewareFactory from '~/server/apps/client-front-rest/Factories/ErrorMiddlewareFactory'
import RecommendationActionFactory from '~/server/apps/client-front-rest/Factories/RecommendationActionFactory'
import type HttpRequest from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpResponse'

export default nextConnect<HttpRequest, HttpResponse>({
  onError: ErrorMiddlewareFactory.Reporter(),
}).get(NextCors, RecommendationActionFactory.GetAll())

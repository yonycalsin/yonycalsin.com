import connect from 'next-connect'
import NextCors from 'nextjs-cors'

import AuthActionFactory from '~/server/apps/client-front-rest/Factories/AuthActionFactory'
import ErrorMiddlewareFactory from '~/server/apps/client-front-rest/Factories/ErrorMiddlewareFactory'
import type HttpRequest from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '~/server/apps/client-front-rest/Shared/Http/Definitions/HttpResponse'
import { defaultApiConfig } from '~/server/apps/client-front-rest/Shared/Utils/constants'

export const config = defaultApiConfig

export default connect<HttpRequest, HttpResponse>({
  onError: ErrorMiddlewareFactory.Reporter(),
}).post(NextCors, AuthActionFactory.GuestSignIn())

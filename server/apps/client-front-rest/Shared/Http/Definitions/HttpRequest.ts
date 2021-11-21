import type { NextApiRequest } from 'next'

interface HttpRequestContext {
  fromIp: string
}

interface HttpRequest extends NextApiRequest {
  context: HttpRequestContext
}

export default HttpRequest

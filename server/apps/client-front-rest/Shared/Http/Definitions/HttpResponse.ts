import type { NextApiResponse } from 'next'

type HttpResponse<T = any> = NextApiResponse<T>

export default HttpResponse

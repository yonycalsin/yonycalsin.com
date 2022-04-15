import type { NextApiResponse } from 'next'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HttpResponse<T = any> = NextApiResponse<T>

export default HttpResponse

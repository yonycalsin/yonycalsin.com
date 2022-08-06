import { IParseInput, stringify } from '@chaitin/querystring'
import type { QueryFunctionContext, QueryKey } from '@tanstack/react-query'

import env from '~/utils/env'

function getQueryString(endpoint: string, query: IParseInput) {
  const startChar = endpoint.includes('?') ? '&' : '?'

  return query ? `${startChar}${stringify(query)}` : ''
}

export function createQueryFn(options?: { baseUrl: string }) {
  return async function queryFn(queryCtx: QueryFunctionContext<QueryKey>) {
    const {
      queryKey: [endpoint, query],
    } = queryCtx

    const baseURL = options?.baseUrl || env.REST_API_URL

    const queryString = getQueryString(endpoint as string, query as IParseInput)

    const URL = `${baseURL}${endpoint}${queryString}`

    const response = await fetch(URL)

    const contentType = response.headers.get('Content-Type')

    const isJSON = contentType && contentType.match(/json/)

    const data = isJSON ? await response.json() : await response.text()

    if (response.ok) {
      return data
    }

    if (isJSON) {
      /**
       * TODO: Extend the error object with the response data
       */
      console.error(response, data)

      throw new Error('Json Http Error')
    } else {
      /**
       * TODO: Extend the error object with the response data
       */
      console.error(response, data)

      throw new Error(`Text Http Error`)
    }
  }
}

import type { ServerListResponse } from '~/typings/services'
import type { SnippetResponsePayload } from '~/typings/services/snippet/snippets'

import { defaultHeaders, formatResponse } from '../shared'

import { snippetApiEndpoints } from './utils/snippet-api-endpoints'

export async function getAllSnippets() {
  const response = await fetch(snippetApiEndpoints.ALL_SNIPPETS, {
    method: 'GET',
    headers: defaultHeaders,
  })

  const payload = await formatResponse<ServerListResponse<SnippetResponsePayload>>(response)

  return payload
}

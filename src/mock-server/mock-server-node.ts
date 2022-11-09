import { setupServer } from 'msw/node'

import { mockServerHandlers } from './mock-server-handlers'

function initServer() {
  const server = setupServer(...mockServerHandlers)

  return server
}

export default initServer

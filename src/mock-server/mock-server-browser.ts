import { setupWorker } from 'msw'

import { mockServerHandlers } from './mock-server-handlers'

function initWorker() {
  const worker = setupWorker(...mockServerHandlers)

  return worker
}

export default initWorker

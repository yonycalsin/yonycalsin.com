import { setupWorker } from 'msw'

import { mockServerHandlers } from './mock-server-handlers'

export const worker = setupWorker(...mockServerHandlers)

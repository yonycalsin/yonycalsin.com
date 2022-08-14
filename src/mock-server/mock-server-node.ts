import { setupServer } from 'msw/node'

import { mockServerHandlers } from './mock-server-handlers'

export const server = setupServer(...mockServerHandlers)

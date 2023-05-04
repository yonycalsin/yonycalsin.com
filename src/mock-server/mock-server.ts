import initWorker from './mock-server-browser'
import initServer from './mock-server-node'

export async function initMocks() {
  if (typeof window === 'undefined') {
    // const { server } = await import('./mock-server-node')

    // server.listen()

    initServer().listen()
  } else {
    // const { worker } = await import('./mock-server-browser')

    // worker.start()

    await initWorker().start()
  }
}

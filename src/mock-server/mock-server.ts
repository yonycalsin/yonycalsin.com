export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./mock-server-node')

    server.listen()
  } else {
    const { worker } = await import('./mock-server-browser')

    worker.start()
  }
}

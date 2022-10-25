function sanitizeEndpoint(endpoint: string) {
  const url = new URL(endpoint)

  if (!url.search) {
    return url.href
  }

  return url.href.replace(url.search, '')
}

export { sanitizeEndpoint }

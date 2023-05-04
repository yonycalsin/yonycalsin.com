function normalizeDisplayUrl(url: string) {
  return url.replace(/(^(https:\/\/)|^(http:\/\/))|(\/)$/g, '')
}

export default normalizeDisplayUrl

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function formatRequestUrl<T extends Record<string, any> = Record<string, any>>(endpoint: string, data: T) {
  const url = new URL(endpoint)

  const setSearchParams = (values: T) => {
    for (const [key, value] of Object.entries(values)) {
      switch (typeof value) {
        case 'string': {
          url.searchParams.append(key, value)
          break
        }

        case 'bigint':
        case 'boolean':
        case 'number': {
          url.searchParams.append(key, String(value))
          break
        }

        case 'object': {
          if (Array.isArray(value)) {
            value.forEach(itemValue => url.searchParams.append(key, itemValue))
          } else {
            setSearchParams(value)
          }

          break
        }
      }
    }
  }

  setSearchParams(data)

  return url.href
}

export default formatRequestUrl

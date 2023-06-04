import type { QueryKey } from '@tanstack/react-query'
import { useQueryClient } from '@tanstack/react-query'

function useQueryCache<T = unknown>(queryKey: QueryKey) {
  const queryClient = useQueryClient()

  const queryCache = queryClient.getQueryCache()

  const queryCacheValue = queryCache.find<T>(queryKey, {
    exact: true,
  })

  return queryCacheValue
}

export default useQueryCache

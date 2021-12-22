import type Query from './Query'

interface QueryHandler<R, Q extends Query> {
  handle(query: Q): Promise<R>
}

export default QueryHandler

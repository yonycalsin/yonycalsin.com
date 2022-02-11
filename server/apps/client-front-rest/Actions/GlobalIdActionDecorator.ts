import _ from 'lodash'

import type HttpRequest from '../Shared/Http/Definitions/HttpRequest'
import type HttpResponse from '../Shared/Http/Definitions/HttpResponse'

import type Action from './Action'

class GlobalIdActionDecorator implements Action {
  private readonly decorated: Action

  private readonly entity: string

  public constructor(decorated: Action, entity: string) {
    this.decorated = decorated

    this.entity = entity
  }

  public async execute(request: HttpRequest, response: HttpResponse): Promise<HttpResponse> {
    const { query } = request

    if (query.id) {
      const globalId = Buffer.from(query.id as string, 'base64')
        .toString('utf8')
        .split(':')

      if (_.size(globalId) > 1 && _.head(globalId) === this.entity) {
        query.id = _.last(globalId) as string
      }
    }

    return this.decorated.execute(request, response)
  }
}

export default GlobalIdActionDecorator

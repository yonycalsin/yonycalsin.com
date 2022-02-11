import debug from 'debug'

import type HttpResponse from '../Shared/Http/Definitions/HttpResponse'

import type Responder from './Responder'

const logger = debug('api:apps:client-front-rest:responder:global-id-responder-decorator')

class GlobalIdResponderDecorator implements Responder<any> {
  private readonly decorated: Responder<any>

  private readonly entity: string

  public constructor(decorated: Responder<any>, entity: string) {
    this.decorated = decorated

    this.entity = entity
  }

  public answer(response: HttpResponse<any>, payload?: any): HttpResponse {
    if (payload.id) {
      payload.id = Buffer.from([this.entity, payload.id].join(':'), 'utf8').toString('base64')
    }

    return this.decorated.answer(response, payload)
  }
}

export default GlobalIdResponderDecorator

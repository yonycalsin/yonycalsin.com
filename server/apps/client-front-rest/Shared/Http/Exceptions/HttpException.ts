import _ from 'lodash'

import type HttpStatus from '../Status/HttpStatus'

interface HttpExceptionOptions {
  statusCode: number
  errorCode?: string
  message?: string
  extraData?: Record<string, any>
}

type HttpExceptionConstructorOptions = Omit<HttpExceptionOptions, 'statusCode'> | string

abstract class HttpException extends Error {
  public override message: string

  private readonly statusCode: number

  private readonly errorCode?: string

  private readonly extraData: Record<string, any>

  public constructor(options: HttpExceptionOptions) {
    const { statusCode, errorCode, message, extraData } = options

    super()

    this.statusCode = statusCode

    this.errorCode = errorCode

    this.extraData = extraData ?? {}

    this.initMessage(message)

    this.initName()
  }

  public static createConstructorOptions(
    statusCode: HttpStatus,
    messageOrOptions: HttpExceptionConstructorOptions,
  ): HttpExceptionOptions {
    const options = {
      statusCode: statusCode,
      message: messageOrOptions,
    } as HttpExceptionOptions

    if (!_.isString(messageOrOptions)) {
      _.assign(options, messageOrOptions)
    }

    return options
  }

  private initMessage(message?: string) {
    if (_.isString(message)) {
      this.message = message
    } else if (this.constructor) {
      this.message = this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g)?.join(' ') as string
    }
  }

  private initName() {
    this.name = this.constructor.name
  }

  public getMessage(): string {
    return this.message
  }

  public getStatusCode(): number {
    return this.statusCode
  }

  public getErrorCode(): string | undefined {
    return this.errorCode
  }

  public getExtraData(): Readonly<Record<string, any>> {
    return Object.freeze(this.extraData)
  }
}

export type { HttpExceptionConstructorOptions, HttpExceptionOptions }

export default HttpException

import _ from 'lodash'

import type HttpStatus from '../Status/HttpStatus'

interface HttpExceptionOptions {
  statusCode: number
  errorCode?: string
  message?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraData?: Record<string, any>
}

type HttpExceptionConstructorOptions = Omit<HttpExceptionOptions, 'statusCode'> | string

abstract class HttpException extends Error {
  public override message: string

  private readonly statusCode: number

  private readonly errorCode?: string

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
      statusCode,
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

      return
    }

    const newMessage = this.constructor.name.match(/[A-Z][a-z]+|[0-9]+/g)?.join(' ')

    if (newMessage) {
      this.message = newMessage
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public getExtraData(): Readonly<Record<string, any>> {
    return Object.freeze(this.extraData)
  }
}

export type { HttpExceptionConstructorOptions, HttpExceptionOptions }

export default HttpException

/**
 * Reference: https://2ality.com/2020/02/typescript-exhaustiveness-checks-via-exceptions.html
 */
class UnsupportedValueError<T = never> extends Error {
  constructor(value: T) {
    super(`Unsupported value: ${value}`)

    this.name = this.constructor.name
  }
}

export default UnsupportedValueError

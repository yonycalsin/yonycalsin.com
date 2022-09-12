import UnsupportedValueError from '../unsupported-value'

describe('Errors / UnsupportedValueError', () => {
  it('throws unsupported value error', () => {
    const fn = () => {
      throw new UnsupportedValueError("The draft status does'nt exists")
    }

    expect(() => fn()).toThrowErrorMatchingSnapshot()
  })
})

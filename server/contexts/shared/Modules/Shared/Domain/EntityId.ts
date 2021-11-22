import type ValueObject from './ValueObject'

interface EntityId<ValueType = number | string> extends ValueObject {
  getValue(): ValueType
  toString(): string
}

export default EntityId

import type EntityId from './EntityId'

class IntegerEntityId implements EntityId<number> {
  private readonly id: number

  protected constructor(value: number) {
    this.id = value
  }

  public static create(value: number): IntegerEntityId {
    return new IntegerEntityId(value)
  }

  public equals(anIntegerEntityId: IntegerEntityId) {
    return anIntegerEntityId instanceof IntegerEntityId && this.id === anIntegerEntityId.getValue()
  }

  public getValue(): number {
    return this.id
  }

  public toString(): string {
    return `${this.id}`
  }
}

export default IntegerEntityId

import type ComparableObject from './ComparableObject'
import type EntityId from './EntityId'

abstract class Entity<IdType extends EntityId> implements ComparableObject {
  private id: IdType

  protected constructor(id: IdType) {
    this.id = id
  }

  public getId(): IdType {
    return this.id
  }

  public setId(id: IdType): void {
    this.id = id
  }

  public equals(anEntity: Entity<IdType>): boolean {
    return anEntity instanceof Entity && this.id.equals(anEntity.getId())
  }
}

export default Entity

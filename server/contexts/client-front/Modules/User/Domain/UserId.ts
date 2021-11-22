import IntegerEntityId from '~/server/contexts/shared/Modules/Shared/Domain/IntegerEntityId'

class UserId extends IntegerEntityId {
  public static override create(id: number): UserId {
    return new UserId(id)
  }

  public static empty(): UserId {
    return new UserId(Number.MAX_SAFE_INTEGER)
  }
}

export default UserId

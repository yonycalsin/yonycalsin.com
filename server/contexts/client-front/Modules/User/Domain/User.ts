import Entity from '~/server/contexts/shared/Modules/Shared/Domain/Entity'

import type UserId from './UserId'

interface UserArgs {
  id: UserId
  email: string
}

class User extends Entity<UserId> {
  private readonly email: string

  private constructor(id: UserId, email: string) {
    super(id)

    this.email = email
  }

  public static create(args: UserArgs) {
    return new User(args.id, args.email)
  }

  public getEmail(): string {
    return this.email
  }
}

export default User

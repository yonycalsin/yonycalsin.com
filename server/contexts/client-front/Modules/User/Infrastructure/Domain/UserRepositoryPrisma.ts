import type DatabaseConnectionPrisma from '~/server/contexts/shared/Modules/Shared/Infrastructure/Database/DatabaseConnectionPrisma'

import User from '../../Domain/User'
import UserId from '../../Domain/UserId'
import type UserRepository from '../../Domain/UserRepository'

class UserRepositoryPrisma implements UserRepository {
  private readonly prismaConnection: DatabaseConnectionPrisma

  public constructor(prismaConnection: DatabaseConnectionPrisma) {
    this.prismaConnection = prismaConnection
  }

  private prismaInstanceToDomain(instance: any) {
    return User.create({
      id: UserId.create(instance.id),
      email: instance.email,
    })
  }

  public async getByEmail(email: string): Promise<User | null> {
    const user = await this.prismaConnection.getConnection().user.findUnique({
      where: {
        email: email,
      },
    })

    if (!user) {
      return null
    }

    return this.prismaInstanceToDomain(user)
  }

  public async create(user: User): Promise<UserId> {
    const dbUser = await this.prismaConnection.getConnection().user.create({
      data: {
        email: user.getEmail(),
      },
    })

    return UserId.create(dbUser.id)
  }
}

export default UserRepositoryPrisma

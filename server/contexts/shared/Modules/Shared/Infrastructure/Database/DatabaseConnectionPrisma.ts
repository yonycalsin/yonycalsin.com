import { PrismaClient } from '@prisma/client'

import type DatabaseConnection from '../../Domain/Database/DatabaseConnection'

class DatabaseConnectionPrisma implements DatabaseConnection<PrismaClient> {
  public async getConnection(): Promise<PrismaClient> {
    const connection = new PrismaClient()

    return connection
  }
}

export default DatabaseConnectionPrisma

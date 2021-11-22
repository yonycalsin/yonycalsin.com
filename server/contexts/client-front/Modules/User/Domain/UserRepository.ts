import type User from './User'

interface UserRepository {
  getByEmail(email: string): Promise<User | null>
}

export default UserRepository

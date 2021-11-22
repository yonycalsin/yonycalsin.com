import type User from './User'
import type UserId from './UserId'

interface UserRepository {
  getByEmail(email: string): Promise<User | null>
  create(user: User): Promise<UserId>
}

export default UserRepository

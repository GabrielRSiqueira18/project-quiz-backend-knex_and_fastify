import { UUID } from 'crypto';
import { User } from '../../entities/User';
import { ExcludeKeys } from '../../utils/ExcludeKeys';

export interface UserRepository {
  create(data: ExcludeKeys<User, 'id'| 'createdAt' | 'updatedAt' | 'sessionId'>): Promise<User>
  findById(id: UUID): Promise<User | null>
  findByUsername(username: string): Promise<User | null>
}
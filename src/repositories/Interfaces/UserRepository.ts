import { UUID } from 'crypto';
import { UserTypes } from '../../entities/types/UserTypes';

interface DataProps {
  username: string
  password: string
}

export interface UserRepository {
  create(data: DataProps): Promise<UserTypes>
  findByUsername(username: string): Promise<UserTypes | null>
  findById(id: UUID): Promise<UserTypes | null>
}
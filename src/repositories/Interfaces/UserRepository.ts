import { User } from '@/entities/User';
import { User as userPrisma} from '@prisma/client'; 
import { UUID } from 'crypto';

export interface UserRepository {
  create(data: User): Promise<userPrisma>
  findById(id: UUID): Promise<userPrisma | null>
  findByUsername(username: string): Promise<userPrisma | null>
}
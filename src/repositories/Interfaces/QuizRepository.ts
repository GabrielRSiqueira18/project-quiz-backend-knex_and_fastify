import { UUID } from 'crypto';
import { UserTypes } from '../../entities/types/UserTypes';

interface DataProps {
  title: string
  description: string
  type: string
}

export interface QuizRepository {
  create(data: DataProps): Promise<UserTypes>
  findById(id: UUID): Promise<UserTypes | null>
  findByTitle(title: string): Promise<UserTypes | null>
}
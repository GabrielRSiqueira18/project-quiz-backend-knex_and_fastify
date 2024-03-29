import { Quiz } from '@/entities/Quiz';
import { ExcludeKeys } from '@/utils/ExcludeKeys';
import { UUID } from 'crypto';

export interface QuizRepository {
  create(data: ExcludeKeys<Quiz, 'id' | 'userId' | 'userPlayedId' | 'updatedAt' | 'createdAt' >): Promise<Quiz>
  findById(id: UUID): Promise<Quiz | null>
  findByTitle(title: string): Promise<Quiz | null>
}
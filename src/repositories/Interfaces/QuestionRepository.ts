import { Question } from '@/entities/Question';
import { ExcludeKeys } from '@/utils/ExcludeKeys';
import { UUID } from 'crypto';

export interface QuestionRepository {
  create(data: ExcludeKeys<Question, 'id' | 'updatedAt' | 'createdAt' >): Promise<Question>
  findById(id: UUID): Promise<Question | null>
  findByTitle(title: string): Promise<Question | null>
}
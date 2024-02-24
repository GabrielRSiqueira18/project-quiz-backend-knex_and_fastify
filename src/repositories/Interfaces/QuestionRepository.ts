import { Question } from '@/entities/Question';
import { UUID } from 'crypto';

export interface QuestionRepository {
  create(data: Question): Promise<Question>
  findById(id: UUID): Promise<Question | null>
  findByTitle(title: string): Promise<Question | null>
}
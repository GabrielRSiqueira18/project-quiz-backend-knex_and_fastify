import { InexistentUserError } from "@/errors/InexistentUserError"
import { UUID } from "crypto"
import { Quiz } from '../entities/Quiz';
import { QuizRepository } from '../repositories/Interfaces/QuizRepository';

interface EditQuizServiceRequest {
  id: UUID
  title?: string
  description?: string
  type?: string
}

interface EditQuizServiceResponse {
  quiz: Quiz
}

export class EditQuizService {
  constructor(private quizRepository: QuizRepository) {}

  public async execute({ title, description, type, id }: EditQuizServiceRequest): Promise<EditQuizServiceResponse> {
    const quiz = await this.quizRepository.findById(id)

    if (!quiz) {
      throw new InexistentUserError()
    }

    quiz.title = title ?? quiz.title
    quiz.description = description ?? quiz.description
    quiz.type = type ?? quiz.type

    return { quiz }
  }
}
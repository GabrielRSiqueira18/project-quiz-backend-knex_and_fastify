import { UUID } from "crypto"
import { QuizRepository } from '../repositories/Interfaces/QuizRepository';
import { QuizWithSameTitleArleadyExistsError } from "@/errors/QuizWithSameTitleArleadyExistsError";
import { Quiz } from "@/entities/Quiz";

interface CreateQuizServiceRequest {
  sessionId?: UUID
  title: string
  description: string
  type: string
  createdAt?: Date
  updatedAt?: Date
}

interface CreateQuizServiceResponse {
  quiz: Quiz
}

export class CreateQuizService {
  constructor(private quizRepository: QuizRepository) {}

  public async execute({ title, description, type }: CreateQuizServiceRequest): Promise<CreateQuizServiceResponse> {
    const quizWithSameTitleArleadyExists = await this.quizRepository.findByTitle(title)

    if (quizWithSameTitleArleadyExists) {
      throw new QuizWithSameTitleArleadyExistsError()
    }

    const quiz = await this.quizRepository.create({
      title,
      description,
      type
    })

    return { quiz }
  }
}
import { QuestionRepository } from '../repositories/Interfaces/QuestionRepository';
import { Question } from "@/entities/Question";
import { QuestionWithSameTitleArleadyExistsError } from '@/errors/QuestionWithSameTitleArleadyExistsError';

interface CreateQuizServiceRequest {
  title: string
  description: string
  type: string
  createdAt?: Date
  updatedAt?: Date
}

interface CreateQuizServiceResponse {
  question: Question
}

export class CreateQuestionService {
  constructor(private questionRepository: QuestionRepository) {}

  public async execute({ title, description, type }: CreateQuizServiceRequest): Promise<CreateQuizServiceResponse> {
    const questionWithSameTitleArleadyExists = await this.questionRepository.findByTitle(title)

    if (questionWithSameTitleArleadyExists) {
      throw new QuestionWithSameTitleArleadyExistsError()
    }

    const question = await this.questionRepository.create({
      title,
      description,
      type
    })

    return { question }
  }
}
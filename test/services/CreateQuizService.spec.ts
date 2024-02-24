import { QuizWithSameTitleArleadyExistsError } from "@/errors/QuizWithSameTitleArleadyExistsError"
import { QuizRepositoryInMemory } from "@/repositories/InMemoryRepositories/QuizRepositoryInMemory"
import { CreateQuizService } from "@/services/CreateQuizService"
import { randomUUID } from "crypto"
import { describe, beforeEach, it, expect } from "vitest"

let quizRepository: QuizRepositoryInMemory
let sut: CreateQuizService

describe('Create Quiz Service', async () => {
  beforeEach(() => {
    quizRepository = new QuizRepositoryInMemory()
    sut = new CreateQuizService(quizRepository)
  })

  it('should be to create a new quiz', async () => {
    const { quiz } = await sut.execute({
      sessionId: randomUUID(),
      title: 'title',
      description: 'description',
      type: 'type'
    })

    expect(quiz.id).toEqual(expect.any(String))
  })

  it('should not be to create a new quiz with same title', async () => {
    await sut.execute({
      sessionId: randomUUID(),
      title: 'title',
      description: 'description',
      type: 'type'
    })

    await expect(sut.execute({
      title: 'title',
      description: 'description',
      type: 'type'
    })).rejects.toBeInstanceOf(QuizWithSameTitleArleadyExistsError)
  })
})
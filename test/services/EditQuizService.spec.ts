import { Quiz } from "@/entities/Quiz"
import { User } from "@/entities/User"
import { QuizRepositoryInMemory } from "@/repositories/InMemoryRepositories/QuizRepositoryInMemory"
import { UserRepositoryInMemory } from "@/repositories/InMemoryRepositories/UserRepositoryInMemory"
import { QuizRepository } from "@/repositories/Interfaces/QuizRepository"
import { EditQuizService } from "@/services/EditQuizService"
import { EditUserService } from "@/services/EditUserService"
import { randomUUID } from "crypto"
import { describe, beforeEach, it, expect } from "vitest"

let quizRepository: QuizRepositoryInMemory
let sut: EditQuizService

describe('Edit Quiz Service', async () => {
  beforeEach(() => {
    quizRepository = new QuizRepositoryInMemory()
    sut = new EditQuizService(quizRepository)
  })

  it('should be to edit a quiz', async () => {
    const id = randomUUID()
    const sessionId = randomUUID()
    const title = 'title'
    const description = 'description'
    const type = 'type'
    const createdAt = new Date()
    const updatedAt = new Date()

    quizRepository.items.push(new Quiz(
      id,
      sessionId,
      title,
      description,
      type,
      createdAt,
      updatedAt
    ))

    const { quiz } = await sut.execute({
      id,
      title: 'edited',
    })

    expect(quiz).toEqual(
      expect.objectContaining({
        title: 'edited',
        description: 'description',
        type: 'type'
    }))
  })
})
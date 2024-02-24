import { QuestionRepositoryInMemory } from "@/repositories/InMemoryRepositories/QuestionRepositoryInMemory"
import { describe, beforeEach, it, expect } from "vitest"
import { CreateQuestionService } from "@/services/CreateQuestionService"
import { QuestionWithSameTitleArleadyExistsError } from "@/errors/QuestionWithSameTitleArleadyExistsError"

let questionRepository: QuestionRepositoryInMemory
let sut: CreateQuestionService

describe('Create Question Service', async () => {
  beforeEach(() => {
    questionRepository = new QuestionRepositoryInMemory()
    sut = new CreateQuestionService(questionRepository)
  })

  it('should be to create a new question', async () => {
    const { question } = await sut.execute({
      title: 'title',
      description: 'description',
      type: 'type'
    })

    expect(question.id).toEqual(expect.any(String))
  })

  it('should not be to create a new question with same title', async () => {
    await sut.execute({
      title: 'title',
      description: 'description',
      type: 'type'
    })

    await expect(sut.execute({
      title: 'title',
      description: 'description',
      type: 'type'
    })).rejects.toBeInstanceOf(QuestionWithSameTitleArleadyExistsError)
  })
})
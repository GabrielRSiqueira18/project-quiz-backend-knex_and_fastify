import { Question } from "@/entities/Question"
import { randomUUID, UUID } from "crypto"
import { QuestionRepository } from "../Interfaces/QuestionRepository"

export class QuestionRepositoryInMemory implements QuestionRepository {
  public items: Question[] = []

  async create(data: Question) {
    const question = new Question(
      data.id ?? randomUUID(),
      data.title,
      data.description,
      data.type,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date()
    )

    this.items.push(question)

    return question 
  }

  async findByTitle(title: string) {
    const question = this.items.find(item => item.title === title) ?? null

    return question
  }

  async findById(id: UUID) {
    const question = this.items.find(item => item.id === id) ?? null

    return question
  }
}


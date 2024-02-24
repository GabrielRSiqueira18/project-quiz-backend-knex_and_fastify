import { Quiz } from "@/entities/Quiz"
import { randomUUID, UUID } from "crypto"
import { QuizRepository } from "../Interfaces/QuizRepository"

export class QuizRepositoryInMemory implements QuizRepository {
  public items: Quiz[] = []

  async create(data: Quiz) {
    const quiz = new Quiz(
      data.id ?? randomUUID(),
      data.userId,
      data.title,
      data.description,
      data.type,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date()
    )

    this.items.push(quiz)

    return quiz 
  }

  async findByTitle(title: string) {
    const quiz = this.items.find(item => item.title === title) ?? null

    return quiz
  }

  async findById(id: UUID) {
    const quiz = this.items.find(item => item.id === id) ?? null

    return quiz
  }
}


import { randomUUID, UUID } from "crypto"
import { Quiz } from "../../entities/Quiz"
import { QuizRepository } from "../Interfaces/QuizRepository"

export class QuizRepositoryInMemory implements QuizRepository {
  
  public items: Quiz[] = []

  async create(data: Quiz) {
    const quiz = new Quiz(
      data.id ?? randomUUID(),
      data.userId ?? randomUUID(),
      data.title,
      data.description,
      data.type,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date()
    )

    this.items.push(quiz)

    return quiz 
  }

  findByTitle(title: string): Promise<UserTypes | null> {
    throw new Error("Method not implemented.")
  }

  async findById(id: UUID) {
    const user = this.items.find(item => item.id === id) ?? null

    return user
  }
}


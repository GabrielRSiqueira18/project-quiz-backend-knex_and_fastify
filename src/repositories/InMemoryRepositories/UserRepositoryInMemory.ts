import { User } from "@/entities/User"
import { ExcludeKeys } from "@/utils/ExcludeKeys"
import { randomUUID, UUID } from "crypto"
import { UserRepository } from "../Interfaces/UserRepository"


export class UserRepositoryInMemory implements UserRepository {
  public items: User[] = []

  async create(data: ExcludeKeys<User, 'id'| 'createdAt' | 'updatedAt'>) {
    const user = new User(
      randomUUID(),
      data.sessionId,
      data.username,
      data.password,
      new Date(),
      new Date()
    )

    this.items.push(user)

    return user 
  }

  async findByUsername(username: string) {
    const target = this.items.find(item => item.username == username) ?? null 

    return target
  }

  async findById(id: UUID) {
    const user = this.items.find(item => item.id === id) ?? null

    return user
  }
}


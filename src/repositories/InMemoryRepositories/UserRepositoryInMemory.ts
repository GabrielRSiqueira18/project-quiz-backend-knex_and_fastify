import { UUID, randomUUID } from "crypto";
import { UserTypes } from "../../entities/types/UserTypes";
import { UserRepository } from "../Interfaces/UserRepository";
import { User } from "../../entities/User";

export class UserRepositoryInMemory implements UserRepository {
  public items: UserTypes[] = []

  async create(data: UserTypes) {
    const user: UserTypes = new User(
      data.id ?? randomUUID(),
      data.sessionId ?? randomUUID(),
      data.username,
      data.password,
      data.createdAt ?? new Date(),
      data.updatedAt ?? new Date()
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


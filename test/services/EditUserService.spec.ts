import { User } from "@/entities/User"
import { UserRepositoryInMemory } from "@/repositories/InMemoryRepositories/UserRepositoryInMemory"
import { EditUserService } from "@/services/EditUserService"
import { randomUUID } from "crypto"
import { describe, beforeEach, it, expect } from "vitest"

let usersRepository: UserRepositoryInMemory
let sut: EditUserService

describe('Edit User Service', async () => {
  beforeEach(() => {
    usersRepository = new UserRepositoryInMemory()
    sut = new EditUserService(usersRepository)
  })

  it('should be to edit a user', async () => {
    const id = randomUUID()
    const sessionId = randomUUID()
    const username = 'username'
    const password = 'password'
    const createdAt = new Date()
    const updatedAt = new Date()

    usersRepository.items.push(new User(
      id,
      sessionId,
      username,
      password,
      createdAt,
      updatedAt
    ))

    const { user } = await sut.execute({
      id,
      username: 'edited',
    })

    expect(user).toEqual(
      expect.objectContaining({
        username: 'edited',
        password: 'password'
    }))
  })
})
import { UserWithSameUsernameArleadyExistsError } from "@/errors/UserWithSameUsernameArleadyExistsError"
import { UserRepositoryInMemory } from "@/repositories/InMemoryRepositories/UserRepositoryInMemory"
import { CreateUserService } from "@/services/CreateUserService"
import { randomUUID } from "crypto"
import { describe, beforeEach, it, expect } from "vitest"

let usersRepository: UserRepositoryInMemory
let sut: CreateUserService

describe('Create User Service', async () => {
  beforeEach(() => {
    usersRepository = new UserRepositoryInMemory()
    sut = new CreateUserService(usersRepository)
  })

  it('should be to create a new user', async () => {
    const { user } = await sut.execute({
      sessionId: randomUUID(),
      password: 'password',
      username: 'gabriel',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should not be to create a new user with same username', async () => {
    await sut.execute({
      sessionId: randomUUID(),
      password: 'password',
      username: 'gabriel',
    })

    await expect(sut.execute({
      sessionId: randomUUID(),
      password: 'password',
      username: 'gabriel',
    })).rejects.toBeInstanceOf(UserWithSameUsernameArleadyExistsError)
  })
})
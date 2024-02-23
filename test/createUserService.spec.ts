import { it, beforeAll, describe, expect } from 'vitest'
import { UserRepositoryInMemory } from '../src/repositories/inMemoryRepositories/UserRepositoryInMemory'
import { CreateUserService } from '../src/services/CreateUserService'
import { UserTypes } from '../src/entities/types/UserTypes'
import { randomUUID } from 'crypto'

let usersRepository: UserRepositoryInMemory
let sut: CreateUserService

describe('Create User Service', async () => {
  beforeAll(() => {
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
})
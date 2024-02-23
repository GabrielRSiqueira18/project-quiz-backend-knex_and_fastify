import { it, beforeAll, describe, expect, beforeEach } from 'vitest'
import { UserRepositoryInMemory } from '../src/repositories/inMemoryRepositories/UserRepositoryInMemory'
import { CreateUserService } from '../src/services/CreateUserService'
import { randomUUID } from 'crypto'
import { UserWithSameUsernameArleadyExistsError } from '../src/errors/UserWithSameUsernameArleadyExistsError'

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

  it('not should be to create a new user with same username', async () => {
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
import { it, beforeAll, describe, expect, beforeEach } from 'vitest'
import { UserRepositoryInMemory } from '../src/repositories/InMemoryRepositories/UserRepositoryInMemory'
import { CreateUserService } from '../src/services/CreateUserService'
import { randomUUID } from 'crypto'
import { UserWithSameUsernameArleadyExistsError } from '../src/errors/UserWithSameUsernameArleadyExistsError'
import { EditUserService } from '../src/services/EditUserService'
import { User } from '../src/entities/User'

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

    const { userEdited } = await sut.execute({
      id,
      username: 'edited',
    })

    expect(userEdited).toEqual(
      expect.objectContaining({
        username: 'edited',
        password: 'password'
    }))
  })
})
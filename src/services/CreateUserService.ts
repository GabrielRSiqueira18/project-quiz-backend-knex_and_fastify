import { UUID } from 'crypto';
import { UserRepository } from '../repositories/Interfaces/UserRepository';
import { UserWithSameUsernameArleadyExistsError } from '../errors/UserWithSameUsernameArleadyExistsError';
import { User } from '../entities/User';

interface CreateGymServiceRequest {
  sessionId?: UUID
  username: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

interface CreateGymServiceResponse {
  user: User
}

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute({ password, username }: CreateGymServiceRequest): Promise<CreateGymServiceResponse> {
    const userWithSameUsernameArleadyExists = await this.userRepository.findByUsername(username)

    if (userWithSameUsernameArleadyExists) {
      throw new UserWithSameUsernameArleadyExistsError()
    }

    const user = await this.userRepository.create({
      password,
      username
    })

    return { user }
  }
}
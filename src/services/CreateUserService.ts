import { UUID } from 'crypto';
import { UserRepository } from '../repositories/Interfaces/UserRepository';
import { UserTypes } from '../entities/types/UserTypes';

interface CreateGymServiceRequest {
  sessionId?: UUID
  username: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

interface CreateGymServiceResponse {
  user: UserTypes
}

export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute({ password, username }: CreateGymServiceRequest): Promise<CreateGymServiceResponse> {
    const user = await this.userRepository.create({
      password,
      username
    })

    return { user }
  }
}
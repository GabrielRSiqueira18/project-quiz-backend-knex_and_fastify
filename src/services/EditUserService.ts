import { UUID } from 'crypto';
import { UserRepository } from '../repositories/Interfaces/UserRepository';
import { UserTypes } from '../entities/types/UserTypes';
import { UserWithSameUsernameArleadyExistsError } from '../errors/UserWithSameUsernameArleadyExistsError';
import { InexistentUserError } from '../errors/InexistentUserError';

interface EditGymServiceRequest {
  id: UUID
  username?: string
  password?: string
}

interface EditGymServiceResponse {
  userEdited: UserTypes
}

export class EditUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute({ password, username, id }: EditGymServiceRequest): Promise<EditGymServiceResponse> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new InexistentUserError()
    }

    const userEdited = {
      ...user,
      username: username ?? user.username,
      password: password ?? user.password
    }

    return { userEdited }
  }
}
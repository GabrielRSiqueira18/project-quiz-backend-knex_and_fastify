import { User } from "@/entities/User"
import { InexistentUserError } from "@/errors/InexistentUserError"
import { UserRepository } from "@/repositories/Interfaces/UserRepository"
import { UUID } from "crypto"

interface EditGymServiceRequest {
  id: UUID
  username?: string
  password?: string
}

interface EditGymServiceResponse {
  user: User
}

export class EditUserService {
  constructor(private userRepository: UserRepository) {}

  public async execute({ password, username, id }: EditGymServiceRequest): Promise<EditGymServiceResponse> {
    const user = await this.userRepository.findById(id)

    if (!user) {
      throw new InexistentUserError()
    }

    user.password = password ?? user.password
    user.username = username ?? user.username

    return { user }
  }
}
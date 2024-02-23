import { UserTypes } from "../../entities/types/UserTypes";

interface DataProps {
  username: string
  password: string
}

export interface UserRepository {
  create(data: DataProps): Promise<UserTypes>
}
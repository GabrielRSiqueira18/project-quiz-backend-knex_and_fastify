import { UUID } from "crypto"

export interface UserTypes {
  id: UUID
  sessionId: UUID
  username: string
  password: string
  createdAt?: Date
  updatedAt?: Date
}

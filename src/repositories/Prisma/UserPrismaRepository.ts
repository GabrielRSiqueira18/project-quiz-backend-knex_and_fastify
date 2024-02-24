import { User } from "@/entities/User";
import { UserRepository } from "../Interfaces/UserRepository";
import { prisma } from "@/libs/prisma";
import { UUID } from "crypto";

export class UserPrismaRepository implements UserRepository {
  async create(data: User) {
    const user = await prisma.user.create({
      data: {
        username: data.username,
        password: data.password,
        session_id: data.sessionId,
        updated_at: data.sessionId,
      }
    })

    return user
  }

  async findById(id: UUID) {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })

    return user
  }

  async findByUsername(username: string) {
    const user = await prisma.user.findUnique({
      where: {
        username
      }
    })

    return user
  }

}
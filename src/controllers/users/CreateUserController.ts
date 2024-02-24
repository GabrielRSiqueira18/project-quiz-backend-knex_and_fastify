import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function CreateUserController(
  req: FastifyRequest, 
  reply: FastifyReply
) {
  const createBodySchema = z.object({
    username: z.string()
      .min(6, 'Username deve ter no minimo 6 caracteres')
      .max(30, 'Username deve ter no maximo 30 caracteres'),
    password: z.string()
    .min(6, 'Username deve ter no minimo 6 caracteres')
    .max(30, 'Username deve ter no maximo 30 caracteres'),
  })

  const { username, password } = createBodySchema.parse(req.body)

  
}
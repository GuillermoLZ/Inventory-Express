import prisma from "../lib/prisma"
import bcrypt from "bcrypt"
import { generateToken } from "../lib/jwt"

interface LoginDTO {
  email: string
  password: string
}

export const loginUser = async ({ email, password }: LoginDTO) => {
  const user = await prisma.user.findUnique({
    where: { email },
  })

  if (!user) throw new Error("Usuario no existe")

  const valid = await bcrypt.compare(password, user.password)

  if (!valid) throw new Error("Password incorrecto")

  const token = generateToken(user)

  return { token }
}
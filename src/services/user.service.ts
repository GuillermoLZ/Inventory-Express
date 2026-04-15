import prisma from "../lib/prisma"
import bcrypt from "bcrypt"

export const registerUser = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10)

  return await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  })
}
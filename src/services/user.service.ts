import prisma from "../lib/prisma"
import bcrypt from "bcrypt"

interface CreateUserDTO {
  name: string
  email: string
  password: string
}

export const createUser = async ({ name, email, password }: CreateUserDTO) => {

  const existingUser = await prisma.user.findUnique({
    where: { email }
  })

  if (existingUser) {
    throw new Error("El usuario ya existe")
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return user
}

interface UpdateUserDTO {
  id: number
  name?: string
  email?: string
  password?: string
}

export const updateUser = async ({ id, name, email, password }: UpdateUserDTO) => {

  let data: any = { name, email }

  if (password) {
    const hashedPassword = await bcrypt.hash(password, 10)
    data.password = hashedPassword
  }

  const user = await prisma.user.update({
    where: { id },
    data
  })

  return user
}
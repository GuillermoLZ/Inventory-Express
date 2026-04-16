import prisma from "@lib/prisma"
import { CreateUserDTO } from "@modules/users/application/dtos/create-user.dto"
import { UpdateUserDTO } from "@modules/users/application/dtos/update-user.dto"
import { UserRepository } from "@modules/users/domain/repositories/user.repository"

export class PrismaUserRepository implements UserRepository {

  async create(data: CreateUserDTO) {
    return prisma.user.create({
      data
    })
  }

  async update(data: UpdateUserDTO) {

    const { id, ...rest } = data

    return prisma.user.update({
      where: { id },
      data: rest
    })
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email }
    })
  }

  async findById(id: number) {
    return prisma.user.findUnique({
      where: { id }
    })
  }

}
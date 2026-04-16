import prisma from "@infrastructure/database/prisma"
import { CreateUserDTO } from "@modules/users/application/dtos/create-user.dto"
import { UpdateUserDTO } from "@modules/users/application/dtos/update-user.dto"
import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { ValidationError } from "@shared/errors/app-error"

export class PrismaUserRepository implements UserRepository {

  async create(data: CreateUserDTO) {
    return prisma.user.create({
      data
    })
  }

  async update(id: number, data: UpdateUserDTO) {
    try {
      return await prisma.user.update({
        where: { id },
        data,
      })
    } catch (error: any) {
      if (error.code === "P2002") {
        throw new ValidationError("El email ya está en uso")
      }

      throw error
    }
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
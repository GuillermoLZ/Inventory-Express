import { PrismaUserRepository } from "./infrastructure/repositories/prisma-user.repository"

import { CreateUserUseCase } from "./application/use-cases/create-user.usecase"
import { UpdateUserUseCase } from "./application/use-cases/update-user.usecase"

import { UserController } from "./presentation/controllers/user.controller"

export const createUsersModule = () => {

  const repository = new PrismaUserRepository()

  const createUser = new CreateUserUseCase(repository)
  const updateUser = new UpdateUserUseCase(repository)

  const controller = new UserController(
    createUser,
    updateUser
  )

  return {
    controller
  }

}
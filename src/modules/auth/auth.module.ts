import { PrismaUserRepository } from "@modules/users/infrastructure/repositories/prisma-user.repository"
import { LoginUseCase } from "./application/use-cases/login.usecase"
import { AuthController } from "./presentation/controllers/auth.controller"

export const createAuthModule = () => {

  // usamos repositorio de users (correcto en arquitectura)
  const userRepository = new PrismaUserRepository()

  const loginUseCase = new LoginUseCase(userRepository)

  const controller = new AuthController(loginUseCase)

  return {
    controller
  }

}
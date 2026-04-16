import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { ValidationError } from "@shared/errors/app-error"
import { logger } from "@shared/logger/logger"

export const validateEmailUnique = async (
  userRepository: UserRepository,
  email: string,
  currentUserId?: number
) => {

  const existingUser = await userRepository.findByEmail(email)

  if (existingUser && existingUser.id !== currentUserId) {
    logger.warn({
      msg: "Intento de email duplicado",
      email,
    })
    throw new ValidationError("El email ya está en uso")
  }

}
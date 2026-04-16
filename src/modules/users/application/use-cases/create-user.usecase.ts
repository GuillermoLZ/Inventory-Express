import bcrypt from "bcrypt"
import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { CreateUserDTO } from "@modules/users/application/dtos/create-user.dto"
import { logger } from "@shared/logger/logger"
import { validateEmailUnique } from "../rules/validate-email-unique.rule"

export class CreateUserUseCase {

  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDTO) {
    if (data.email) {
      await validateEmailUnique(this.userRepository, data.email)
    }

    const hashedPassword = await bcrypt.hash(data.password, 10)

    const user = await this.userRepository.create({
      ...data,
      password: hashedPassword
    })

    logger.info({
      msg: "Usuario creado correctamente",
      userId: user.id,
      email: user.email,
    })

    return user
  }

}
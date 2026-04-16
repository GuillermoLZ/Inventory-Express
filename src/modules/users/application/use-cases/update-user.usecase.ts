import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { UpdateUserDTO } from "@modules/users/application/dtos/update-user.dto"
import { logger } from "@shared/logger/logger"
import { NotFoundError } from "@shared/errors/app-error"
import { validateEmailUnique } from "../rules/validate-email-unique.rule"

export class UpdateUserUseCase {

  constructor(private userRepository: UserRepository) {}

  async execute(data: UpdateUserDTO) {

    const user = await this.userRepository.findById(data.id)

    if (!user) {
      throw new NotFoundError("Usuario no existe")
    }

    if (data.email && data.email !== user.email) {
      await validateEmailUnique(this.userRepository, data.email)
    }

    const updatedUser = await this.userRepository.update(data.id, data)

    logger.info({
      msg: "Usuario actualizado",
      userId: updatedUser.id,
    })

    return updatedUser
  }

}
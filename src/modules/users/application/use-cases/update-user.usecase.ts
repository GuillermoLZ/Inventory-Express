import bcrypt from "bcrypt"
import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { UpdateUserDTO } from "@modules/users/application/dtos/update-user.dto"

export class UpdateUserUseCase {

  constructor(private userRepository: UserRepository) {}

  async execute(data: UpdateUserDTO) {
    if (data.password) {
      data.password = await bcrypt.hash(data.password, 10)
    }

    return this.userRepository.update(data)
  }

}
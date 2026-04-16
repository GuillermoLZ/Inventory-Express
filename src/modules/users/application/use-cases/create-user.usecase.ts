import bcrypt from "bcrypt"
import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { CreateUserDTO } from "@modules/users/application/dtos/create-user.dto"

export class CreateUserUseCase {

  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDTO) {
    const hashedPassword = await bcrypt.hash(data.password, 10)

    return this.userRepository.create({
      ...data,
      password: hashedPassword
    })
  }

}
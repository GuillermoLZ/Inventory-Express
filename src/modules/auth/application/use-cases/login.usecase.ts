import bcrypt from "bcrypt"
import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { generateToken } from "@lib/jwt"
import { LoginDTO } from "@modules/auth/application/dtos/login.dto"

export class LoginUseCase {

  constructor(private userRepository: UserRepository) {}

  async execute(data: LoginDTO) {

    const user = await this.userRepository.findByEmail(data.email)

    if (!user) throw new Error("Usuario no existe")

    const valid = await bcrypt.compare(data.password, user.password)

    if (!valid) throw new Error("Password incorrecto")

    const token = generateToken(user)

    return { token }
  }

}
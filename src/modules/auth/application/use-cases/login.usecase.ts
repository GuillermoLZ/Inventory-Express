import bcrypt from "bcrypt"
import { UserRepository } from "@modules/users/domain/repositories/user.repository"
import { generateToken } from "@infrastructure/auth/jwt"
import { LoginDTO } from "@modules/auth/application/dtos/login.dto"
import { UnauthorizedError } from "@shared/errors/app-error"

export class LoginUseCase {

  constructor(private userRepository: UserRepository) {}

  async execute(data: LoginDTO) {

    const user = await this.userRepository.findByEmail(data.email)

    if (!user) throw new UnauthorizedError("Credenciales inválidas")

    const valid = await bcrypt.compare(data.password, user.password)

    if (!valid) throw new UnauthorizedError("Credenciales inválidas")

    const token = generateToken(user)

    return { token }
  }

}
import { CreateUserDTO } from "../../application/dtos/create-user.dto"
import { UpdateUserDTO } from "../../application/dtos/update-user.dto"
import { User } from "../entities/user.entity"

export interface UserRepository {
  findByEmail(email: string): Promise<User | null>
  create(user: CreateUserDTO): Promise<User>
  update(data: UpdateUserDTO): Promise<User>
}
import { Request, Response } from "express"
import { CreateUserUseCase } from "@modules/users/application/use-cases/create-user.usecase"
import { UpdateUserUseCase } from "@modules/users/application/use-cases/update-user.usecase"
import { asyncHandler } from "@shared/utils/async-handle"

export class UserController {

  constructor(
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdateUserUseCase
  ) {}

  create = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.createUserUseCase.execute(req.body)
    res.status(201).json(result)
  })

  update = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.updateUserUseCase.execute({
      id: Number(req.params.id),
      ...req.body
    })
    res.json(result)
  })

}
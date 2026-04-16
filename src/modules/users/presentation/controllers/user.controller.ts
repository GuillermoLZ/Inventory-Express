import { Request, Response } from "express"
import { CreateUserUseCase } from "@modules/users/application/use-cases/create-user.usecase"
import { UpdateUserUseCase } from "@modules/users/application/use-cases/update-user.usecase"

export class UserController {

  constructor(
    private createUserUseCase: CreateUserUseCase,
    private updateUserUseCase: UpdateUserUseCase
  ) {}

  create = async (req: Request, res: Response) => {
    try {

      const result = await this.createUserUseCase.execute(req.body)

      return res.status(201).json(result)

    } catch (error: unknown) {

      if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
      }

      return res.status(500).json({ error: "Error interno" })
    }
  }

  update = async (req: Request, res: Response) => {
    try {

      const result = await this.updateUserUseCase.execute({
        id: Number(req.params.id),
        ...req.body
      })

      return res.json(result)

    } catch (error: unknown) {

      if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
      }

      return res.status(500).json({ error: "Error interno" })
    }
  }

}
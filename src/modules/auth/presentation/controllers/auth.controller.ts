import { Request, Response } from "express"
import { LoginUseCase } from "@modules/auth/application/use-cases/login.usecase"

export class AuthController {

  constructor(
    private loginUseCase: LoginUseCase
  ) {}

  login = async (req: Request, res: Response) => {
    try {

      const result = await this.loginUseCase.execute(req.body)

      return res.json(result)

    } catch (error: unknown) {

      if (error instanceof Error) {
        return res.status(400).json({ error: error.message })
      }

      return res.status(500).json({ error: "Error interno" })
    }
  }

}
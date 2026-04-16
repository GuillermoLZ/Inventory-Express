import { Request, Response } from "express"
import { LoginUseCase } from "@modules/auth/application/use-cases/login.usecase"
import { asyncHandler } from "@shared/utils/async-handle"

export class AuthController {

  constructor(
    private loginUseCase: LoginUseCase
  ) {}

  login = asyncHandler(async (req: Request, res: Response) => {
    const result = await this.loginUseCase.execute(req.body)
    res.json(result)
  })

}
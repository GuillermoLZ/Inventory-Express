import { Request, Response } from "express"
import { loginUser } from "../services/auth.services"

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body

    const result = await loginUser({ email, password })

    return res.json(result)
  } catch (error: unknown) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }

    return res.status(400).json({ error: "Error desconocido" })
  }
}
import { Request, Response } from "express"
import { createUser, updateUser } from "../services/user.service"

export const create = async (req: Request, res: Response) => {
  try {

    const { name, email, password } = req.body

    const user = await createUser({
      name,
      email,
      password
    })

    return res.status(201).json(user)

  } catch (error: unknown) {

    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }

    return res.status(500).json({ error: "Error interno" })
  }
}

export const update = async (req: Request, res: Response) => {
  try {

    const id = Number(req.params.id)

    const user = await updateUser({
      id,
      ...req.body
    })

    return res.json(user)

  } catch (error: unknown) {

    if (error instanceof Error) {
      return res.status(400).json({ error: error.message })
    }

    return res.status(500).json({ error: "Error interno" })
  }
}
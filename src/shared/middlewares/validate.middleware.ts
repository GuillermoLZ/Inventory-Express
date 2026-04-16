import { Request, Response, NextFunction } from "express"
import { ZodSchema } from "zod"
import { ValidationError } from "@shared/errors/app-error"

export const validate =
  (schema: ZodSchema) =>
  (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body)

    if (!result.success) {
      throw new ValidationError("Datos inválidos")
    }

    req.body = result.data
    next()
  }
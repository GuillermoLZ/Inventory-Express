import { Request, Response, NextFunction } from "express"
import { verifyToken } from "@infrastructure/auth/jwt"
import { UserPayload } from "@shared/types/user-payload"
import { AuthRequest } from "@shared/types/express-request"
import { UnauthorizedError } from "@shared/errors/app-error"

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new UnauthorizedError("Token requerido")
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = verifyToken(token) as UserPayload
    req.user = decoded
    next()
  } catch (error) {
    throw new UnauthorizedError("Token inválido")
  }
}
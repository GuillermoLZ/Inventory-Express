import { Request, Response, NextFunction } from "express"
import { verifyToken } from "@infrastructure/auth/jwt"
import { UserPayload } from "@shared/types/user-payload"
import { AuthRequest } from "@shared/types/express-request"

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: "No token" })
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = verifyToken(token) as UserPayload
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({ error: "Token inválido" })
  }
}
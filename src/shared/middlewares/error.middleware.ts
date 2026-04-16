import { Request, Response, NextFunction } from "express"
import { AppError } from "../errors/app-error"

import { logger } from "@shared/logger/logger"

export const errorMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  _next: NextFunction
) => {

  const statusCode = err.statusCode || 500

  logger.error({
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    user: req.user?.id,
  })

  return res.status(statusCode).json({
    success: false,
    error: {
      code: err.code || "INTERNAL_ERROR",
      message: err.message || "Error interno",
    },
  })
}
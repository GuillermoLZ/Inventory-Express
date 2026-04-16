export class AppError extends Error {
  public readonly statusCode: number
  public readonly code: string
  public readonly isOperational: boolean

  constructor(
    message: string,
    statusCode = 400,
    code = "APP_ERROR"
  ) {
    super(message)
    this.statusCode = statusCode
    this.code = code
    this.isOperational = true

    Error.captureStackTrace(this, this.constructor)
  }
}

export class NotFoundError extends AppError {
  constructor(message = "Recurso no encontrado") {
    super(message, 404, "NOT_FOUND")
  }
}

export class UnauthorizedError extends AppError {
  constructor(message = "No autorizado") {
    super(message, 401, "UNAUTHORIZED")
  }
}

export class ValidationError extends AppError {
  constructor(message = "Datos inválidos") {
    super(message, 400, "VALIDATION_ERROR")
  }
}
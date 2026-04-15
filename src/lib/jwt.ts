import jwt from "jsonwebtoken"

const SECRET = "mi_secreto"

export const generateToken = (user: { id: number; email: string }) => {
  return jwt.sign(
    { id: user.id, email: user.email },
    SECRET,
    { expiresIn: "1h" }
  )
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET)
}
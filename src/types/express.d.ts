import { UserPayload } from "../shared/types/user-payload"

declare module "express-serve-static-core" {
  interface Request {
    user?: UserPayload
  }
}
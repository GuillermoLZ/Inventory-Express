import { emailSchema } from "@shared/validators/email.validator"
import { z } from "zod"

export const createUserSchema = z.object({
  email: emailSchema,
  password: z.string().min(6),
  name: z.string().min(1),
})
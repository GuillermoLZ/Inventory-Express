import { Router } from "express"
import { createUsersModule } from "@modules/users/users.module"
import { validate } from "@shared/middlewares/validate.middleware"
import { createUserSchema } from "@modules/users/application/validators/create-user.validator"
import { authMiddleware } from "@shared/middlewares/auth.middleware"

const router = Router()

const { controller } = createUsersModule()

router.post("/", validate(createUserSchema), controller.create)
router.put("/:id", authMiddleware, validate(createUserSchema), controller.update)

export default router
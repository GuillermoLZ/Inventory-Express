import { Router } from "express"
import { createUsersModule } from "@modules/users/users.module"

const router = Router()

const { controller } = createUsersModule()

router.post("/", controller.create)
router.put("/:id", controller.update)

export default router
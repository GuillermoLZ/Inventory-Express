import { Router } from "express"
import { createAuthModule } from "../../auth.module"

const router = Router()

const { controller } = createAuthModule()

router.post("/login", controller.login)

export default router
import { Router } from "express"
import { createProductsModule } from "@modules/products/products.module"
import { authMiddleware } from "@shared/middlewares/auth.middleware"

const router = Router()

const { controller } = createProductsModule()

router.use(authMiddleware)

router.post("/", controller.create)
router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)

export default router
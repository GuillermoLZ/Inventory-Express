import { Router } from "express"
import { createProductsModule } from "@modules/products/products.module"

const router = Router()

const { controller } = createProductsModule()

router.post("/", controller.create)
router.get("/", controller.findAll)
router.get("/:id", controller.findOne)
router.put("/:id", controller.update)
router.delete("/:id", controller.delete)

export default router
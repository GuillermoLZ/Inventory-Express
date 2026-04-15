import { Router } from "express"
import { getProducts, createProduct } from "../controllers/product.controller"
import { authMiddleware } from "../middlewares/auth.middleware"

const router = Router()

router.get("/", authMiddleware, getProducts)
router.post("/", authMiddleware, createProduct)

export default router
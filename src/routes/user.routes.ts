import { Router } from "express"
import { create, update } from "../controllers/user.controller"

const router = Router()

router.post("/", create)

router.put("/:id", update)

export default router
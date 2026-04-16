import "dotenv/config"
import express from "express"
import productRoutes from "./modules/products/presentation/routes/product.routes"
import authRoutes from "./modules/auth/presentation/routes/auth.routes"
import userRoutes from "./modules/users/presentation/routes/user.routes"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})
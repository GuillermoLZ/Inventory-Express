import "dotenv/config"
import express from "express"
import productRoutes from "./routes/product.routes"
import authRoutes from "./routes/auth.routes"
import userRoutes from "./routes/user.routes"

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})